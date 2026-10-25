import { createStartupAPI } from "@startup-api/cloudflare";

const api = createStartupAPI({
  providers: {
    atproto: { scopes: "account:email" },
  },
});

export default api.default;
export const { UserDO, AccountDO, SystemDO, CredentialDO } = api;
