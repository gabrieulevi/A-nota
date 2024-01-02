import app from "./src/app.js";
import 'dotenv/config';

const port = process.env.PORT || 48620;


app.listen(port, () => console.log(`Server up and running on port ${port}`));
