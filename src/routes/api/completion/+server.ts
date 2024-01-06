import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({
	apiKey: OPENAI_API_KEY
});

export const config = {
	runtime: 'edge'
};

export async function POST({ request }: { request: Request }): Promise<StreamingTextResponse> {
	const { prompt } = await request.json();

	const response = await openai.completions.create({
		model: 'text-davinci-003',
		stream: true,
		temperature: 0.6,
		max_tokens: 300,
		prompt: `Provide a recommendation for an EC2 instance type that suits the following criteria: ${prompt}. The recommendation should optimize for cost-efficiency while ensuring performance does not fall below the needs specified. Include the reasoning behind the choice. Please limit the recommendation to just one instance type and provide justifications for performance and cost efficiency.
        `
	});

	const stream = OpenAIStream(response);
	return new StreamingTextResponse(stream);
}
