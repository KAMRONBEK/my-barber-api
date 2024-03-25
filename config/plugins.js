module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_ilEa4MsVxJZqj3lZj7BcDwmLpKYd/cBSvarhWsQ",
        apiToken: "WWRyLzJXFS4VS4VT8PQvzb4N",
        appFilter: "my-barber-api",
        teamFilter: "team_V5GP2xSnW8OcTpxLuwrBXTDV",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });