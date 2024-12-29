import { createThirdwebClient, ThirdwebClient } from "thirdweb"

export const client: ThirdwebClient = createThirdwebClient({
  clientId: process.env.NEXT_THIRDWEB_CLIENT_ID,
  secretKey: process.env.NEXT_THIRDWEB_SECRET!,
})
