export default {
  fileSystem: {
    path: "./db",
  },
  mongodb: {
    url: "mongodb://localhost/ecommerce",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "ch-backend-ed249",
    private_key_id: "2aadaf79475387c86553c2d53030ffc0d47e8f04",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDeFFW37O1UMyZx\nag4XB2BGb6fHl/Qez+LwxRRF21n9dqwva2/nrYDpqpLook6hh/VJokWmpbKlSOPF\nDq9h5KlQZgjWjo/qU2DoeLcxqmAucCpyglBMoxZpRcmVf051/uD8CtoTUjGyHjvz\ngB+D5pGtZ0QF3viMe77dwl/nQdZOs6FAdscBVWkZEZyvdTnO3C2gD/HDAlIWvjqI\nLmWMpnmAgRHRGH0V3rKu7rLryHmfJfBtUqfIlx4X0Npcf+v+j1N6lS0ChJ3LbRPI\nsW5B5TrRpsDjEFZ6Uj7vRclQjWbGPf/jNKJr+Kzmj8OwZgbzhzD2X9KqHm3hcca8\nZ5cJH56DAgMBAAECggEAZw3wqSUdDNGfqUmZuD4IAyeVKB3vfszhdvE9cx1TKTeE\nt4yXpV7yT3yEJ8gJzROWU9ElmSuTNvgYGj2yTS8bEuAGgeouBoMimT5LZJS3hVUv\nnWuzb5zOrZNg9Crbcg4QwWUXxZeC0DEPiPOPrFm2iE0/V6oclLRn4ehtMJdwp5v+\njiL7EpyHYn7J2iBNV0P1AphxiHWO9PalutPUItaJD1lQMVe9Q2GYFzmHHgs05p/i\nHexZj0jPNmJpj8T6ovj4fSWF4afPRMUTou62vCUuR0DUm/m39vQ/7qlRavJFUGUh\nO3wlTkM0/tG5xA3edj5qWZjRe8gHGVto8UMe3bMNoQKBgQDw2d3NK0LXpFM83eKb\n3ITPYVQe5AvaZIZWXT4VGTx1Gkm2fpuQV3i68NfLmaeNJ4ksSJru8wSr10ksXQB9\nhRpZnR00kEj/tom3ZuJYMI/BSoH7aaLKjiJ/krNeGPA7QzbYTr5AD4+W4830h5VI\n1r8q/WLZyyLfFygWxUiQ5ANq9QKBgQDsDDY+G4FcxO3yyNV1Tzp55qwH7cB/fJEp\n9INuZT/2i2+xKSQC+VUAhhTDOqyQ3e6DT8uxdqJAKBI8aFx+mmyQFkEplDntGjSJ\nvJmAcZmJc1pGj9VJhJRMWdWGOBaEjIlHbW0eOXSszkZd4B96TFnY2n1EHtf6HxVx\nxPwSkAholwKBgHLbIrfVupGFbqBnG8rCFZ+jxW7Zx4FFUP7chl+fYkJh3+ckZ2El\nJZDYi8AvLUTWJsc0dJYg1AhyqRV74GD7WX6Eu0m2yOkRDomkiaoOtm8x7dyMGrLH\np1H5DoqAEAfi3MO4gWehRBNr3WqQQbOznQSOQ1ajVaTXsSlyuVFHOw4FAoGAcrVc\nhsIHE3X/zEQct21RFXwrjY7URR/by2+vjy5U7xLDrGw5u9g+noqJ/HW+9odjKRzV\n99+W6WaPththF4UjzMGD2RjXLYnWjjjAv9J0sn8EF9Y96AQtrQza3ubSyochDzz2\nEgIJ2RBE0cnggiYoY2GKDliOzFXerfL0LHEiJPECgYEA5DQ1BuAKPhPImkfR750N\nF+APOTizhHZD1LAVet20S1rB0nizcnByc1WyyNekiMsNs/vif8xm1Ga7kzjARWPa\ny+wzOUMCUEB58HReYIsCdztdMa1ExNoRCZHGY5xzHinwloWfxEfzh3F0PwGcWJsi\nsJJ/j/OPJ/ZQDXyG7cpnVjg=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-w1zh8@ch-backend-ed249.iam.gserviceaccount.com",
    client_id: "118270683975166416853",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-w1zh8%40ch-backend-ed249.iam.gserviceaccount.com",
  },
};
