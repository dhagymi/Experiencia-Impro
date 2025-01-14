import dotenv from "dotenv";
dotenv.config();
const { PROJECT_ID, PRIVATE_KEY_ID, PRIVATE_KEY, CLIENTE_EMAIL } = process.env;

export default {
  type: "service_account",
  project_id: PROJECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY,
  client_email: CLIENTE_EMAIL,
  client_id: "103050868448959942766",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-91kvh%40experiencia-impro.iam.gserviceaccount.com",
};
