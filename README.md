# Indiebackend Admin SDK

## Usage

```javascript
import { Indiebackend } from "@indiebackend/admin-adk";

const admin = new Indiebackend("<your app secret>");

await admin.currecies.getCurrencies("<profileId>");
await admin.groups.createGroup({});
```
