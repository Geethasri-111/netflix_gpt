import OpenAI from 'openai';
import {openAIGptKey} from './constants';

const openAI = new OpenAI({
    
  apiKey: openAIGptKey,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});


export default openAI;