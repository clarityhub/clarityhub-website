export default [
	{
		codeText: `const clarityhub = require('@clarityhub/api')({
    apiKeyId: process.env.API_KEY_ID,
    apiKeySecret: process.env.API_KEY_SECRET,
});`,
		codeOutput: `Logs will appear here...`,
		description: `
        Getting started with Clarity Hub is easy, just sign up and create an Access Key.
        `,
	},
	{
		codeText: `const sentences = require('./training-sentences.json');

const model = await clarityhub.models.create();

await model.train(sentences);

console.log(model.id);
console.log(model.intents);`,
		codeOutput: `"46dcc0a7-ab5a-4dea-83d2-7a7d88a681ab"
["account", "billing", "login"]`,
		description: `
        Use the conversations you already have to train a model specific to your business. You don't need
        to learn machine learning, clean, and label all of your data – we do it for you.
        `,
	},
	{
		codeText: `const model = await clarityhub.models.get('46dcc0a7-ab5a-4dea-83d2-7a7d88a681ab');

const prediction = await model.predict("I can't log into my account");

console.log(prediction);`,
		codeOutput: `{
    "intent": "login",
    "predictions": [{
        "label": "account",
        "probability": 0.81,
    }, {
        "label": "billing",
        "probability": 0.01,
    }, {
        "label": "login",
        "probability": 0.92
    }]
}`,
		description: `
        Once the model is trained, you can use the Infer Model to predict intents and other NLP data from new sentences.
        `,
	},
];