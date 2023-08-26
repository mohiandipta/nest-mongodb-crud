import { Logger, Module, OnApplicationShutdown } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: async () => {
                try {
                    const connectionOptions = {
                        uri: 'mongodb+srv://mohiandipta:mohian123456@cluster0.mbto5.mongodb.net/hrisTest?retryWrites=true&w=majoritye',
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                    };

                    // Attempt to connect to the database
                    await mongoose.connect(connectionOptions.uri);

                    // If the above line doesn't throw an error, the connection was successful
                    console.log('DB connected');

                    return connectionOptions;
                } catch (error) {
                    console.error('Error connecting to the database:', error);
                    throw error;
                }
            }
        })
    ],
})

export class DatabaseModule implements OnApplicationShutdown {
    private readonly logger = new Logger(DatabaseModule.name);

    async onApplicationShutdown(signal?: string) {
        try {
            await mongoose.disconnect();
            this.logger.log('MongoDB connection closed.');
        } catch (error) {
            this.logger.error('Error closing MongoDB connection', error);
        }
    }
}
