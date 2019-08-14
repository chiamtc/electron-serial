// Import node modules.
const processSpawn = require(`child_process`).spawn;

// Local private variables.
let childProcess: any;

class AudioRecorder extends require(`events`).EventEmitter {
    /**
     * Constructor of AudioRecord class.
     * @param {Object} options Object with optional options variables
     * @param {Object} logger Object with log, warn, and error functions
     * @returns this
     */
    constructor(options = {}, logger: any) {
        super();

        // For the `rec` and `sox` only options the default is applied if a more general option is not specified.
        this.options = Object.assign({
            program: `rec`,				// Which program to use, either `arecord`, `rec`, and `sox`.
            device: null,				// Recording device to use.
            name: 'recording.wav',
            bits: 32,					// Sample size. (only for `rec` and `sox`)
            channels: 1,				// Channel count.
            encoding: `floating-point`,	// Encoding type. (only for `rec` and `sox`)
            format: `S16_LE`,			// Format type. (only for `arecord`)
            rate: 44100,				// Sample rate.
            type: `wav`,				// File type.
            buffer: 512,
            // Following options only available when using `rec` or `sox`.
            silence: 2,					// Duration of silence in seconds before it stops recording.
            thresholdStart: 0.5,		// Silence threshold to start recording.
            thresholdStop: 0.5,			// Silence threshold to stop recording.
            keepSilence: true			// Keep the silence in the recording.
        }, options);
        this.logger = logger;

        this.command = {
            arguments: [
                // Show no progress -q
                `-d`, //uncomment if it's sox
                `--clobber`,
                // Channel count
                `-c`, this.options.channels.toString(),
                // Sample rate
                `-r`, this.options.rate.toString(),
                // Format type
                `-t`, this.options.type,
                //name
                `--buffer`, this.options.buffer,
                `-b`, this.options.bits,
                `-e`, this.options.encoding,
                // this.options.name,
                '-'
            ],
            options: {
                encoding: `binary`
            }
        };
        switch (this.options.program) {
            default:
            case `sox`:
                // Select default recording device if none specified, otherwise no continues recording.

                this.command.arguments.push();
                break;
            case `rec`:
                // Select recording device.
                /*if (this.options.device) {
                    this.command.arguments.push(`-d`, this.options.device);
                }
*/
                // Add sample size and encoding type.
                this.command.arguments.push();

                if (this.options.silence) {
                    this.command.arguments.push(
                        // Effect
                        `silence`
                    );

                    // Keep the silence of the recording.
                    if (this.options.keepSilence) {
                        this.command.arguments.push(
                            // Keep silence in results
                            `-l`,
                        );
                    }

                    // Stop recording after duration has passed below threshold.
                    this.command.arguments.push(
                        // Enable above-periods
                        `1`,
                        // Duration
                        `0.1`,
                        // Starting threshold
                        this.options.thresholdStart.toFixed(1).concat(`%`),
                        // Enable below-periods
                        `1`,
                        // Duration
                        this.options.silence.toFixed(1),
                        // Stopping threshold
                        this.options.thresholdStop.toFixed(1).concat(`%`)
                    );
                }
                break;
            case `arecord`:
                if (this.options.device) {
                    this.command.arguments.unshift(`-D`, this.options.device);
                }
                this.command.arguments.push(
                    // Format type
                    `-f`, `S16_LE`
                );
                break;
        }

        if (this.logger) {
            // Log command.
            this.logger.log(`AudioRecorder: Command '${this.options.program} ${this.command.arguments.join(` `)}'`);
        }

        return this;
    }

    /**
     * Creates and starts the audio recording process.
     * @returns this
     */
    start() {
        if (childProcess) {
            if (this.logger) {
                this.logger.warn(`AudioRecorder: Process already active, killed old one started new process.`);
            }
            childProcess.kill();
        }

        // Create new child process and give the recording commands.
        childProcess = processSpawn(this.options.program, this.command.arguments, this.command.options);

        // Store this in `self` so it can be accessed in the callback.
        let self = this;
        childProcess.on(`close`, function (exitCode: any) {
            if (self.logger) {
                self.logger.log(`AudioRecorder: Exit code '${exitCode}'.`);
            }
            self.emit(`close`, exitCode);
        });

        if (this.logger) {
            this.logger.log(`AudioRecorder: Started recording.`);
        }

        return this;
    }

    /**
     * Stops and removes the audio recording process.
     * @returns this
     */
    stop() {
        if (!childProcess) {
            if (this.logger) {
                this.logger.warn(`AudioRecorder: Unable to stop recording, no process active.`);
            }
            return this;
        }

        childProcess.kill();
        childProcess = null;

        if (this.logger) {
            this.logger.log(`AudioRecorder: Stopped recording.`);
        }

        return this;
    }

    /**
     * Get the audio stream of the recording process.
     * @returns The stream.
     */
    stream() {
        if (!childProcess) {
            if (this.logger) {
                this.logger.warn(`AudioRecorder: Unable to retrieve stream, because no process not active. Call the start or resume function first.`);
            }
            return null;
        }

        return childProcess.stdout;
    }
}

module.exports = AudioRecorder;
