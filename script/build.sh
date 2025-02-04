#/bin/sh

dotenv --file website/.env run docker build -t bookstars/pages:latest \
    --secret id=payload_secret,env=PAYLOAD_SECRET \
    --secret id=database_uri,env=DATABASE_URI \
    --secret id=database_auth_token,env=DATABASE_AUTH_TOKEN \
    --secret id=cloudinary_cloud_name,env=CLOUDINARY_CLOUD_NAME \
    --secret id=cloudinary_api_key,env=CLOUDINARY_API_KEY \
    --secret id=cloudinary_api_secret,env=CLOUDINARY_API_SECRET \
    .
