const env = (process.env.ENV || "development").trim();

const envConfig = {
  development: {
    MalaysiasFramework:
      "https://demo-compliance.emlotech.com/en/products-services/aml-cft-explained/",
    ComplianceScreening: "https://demo-compliance.emlotech.com/en/",
    LiveRates: "https://demo-live-rates.emlotech.com/en/",
    MCBaseUrl: "https://demo-mc.emlotech.com",
    MCAPIUrl: "https://demo-pos-api.emlotech.com",
  },
  staging: {
    MalaysiasFramework:
      "https://demo-compliance.emlotech.com/en/products-services/aml-cft-explained/",
    ComplianceScreening: "https://demo-compliance.emlotech.com/en/",
    LiveRates: "https://demo-live-rates.emlotech.com/en/",
    MCBaseUrl: "https://demo-mc.emlotech.com",
    MCAPIUrl: "https://demo-pos-api.emlotech.com",
  },
  production: {
    MalaysiasFramework:
      "https://compliance.emlotech.com/en/products-services/aml-cft-explained/",
    ComplianceScreening: "https://compliance.emlotech.com/en/",
    LiveRates: "https://live-rates.emlotech.com/en/",
    MCBaseUrl: "https://mc.emlotech.com",
    MCAPIUrl: "https://pos-api.emlotech.com",
  },
}[env];

export default envConfig;
