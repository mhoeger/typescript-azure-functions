import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { upper } from "case"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = req.query.name || (req.body && req.body.name) || "friend";
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: upper(`Hello, ${name}!`)
    };
};

export default httpTrigger;
