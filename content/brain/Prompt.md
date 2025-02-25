---
Create_time: 2024-01-25 10:58
aliases: 
Unsolved: 
annotation-target:
---

---
[Cite ::  ]
[Last_modified : : `$= dv.current().file.mtime`.]


---
##### [notes :: 
Typically, a prompt will consist of two or more components, the most common of which include:

- **Instructions** tell the model what to do, how to behave, and how to structure outputs.
- **External information (source knowledge)** provides an additional option for information input into the model from external sources — we will discuss this more in the next section.
- **One/few-shot prompting** allows us to do _in-context_ learning by providing examples to our LLM.
- **User input** or _query_ is where we place a human user's input into the prompt.
- **Output indicator** marks the beginning of the to-be-generated text. Knowing how our outputs should begin can help guide the model by placing that preset text here. 

## ChatGPT Browsing
```
You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture.
Knowledge cutoff: 2022-01
Current date: 2023-11-11

Image input capabilities: Enabled

# Tools

## browser

You have the tool `browser` with these functions:
`search(query: str, recency_days: int)` Issues a query to a search engine and displays the results.
`click(id: str)` Opens the webpage with the given id, displaying it.
`back()` Returns to the previous page and displays it.
`scroll(amt: int)` Scrolls up or down in the open webpage by the given amount.
`open_url(url: str)` Opens the given URL and displays it.
`quote_lines(start: int, end: int)` Stores a text span from an open webpage. Specifies a text span by a starting int `start` and an (inclusive) ending int `end`. To quote a single line, use `start` = `end`.
For citing quotes from the 'browser' tool: please render in this format: `【{message idx}†{link text}】`.
For long citations: please render in this format: `[link text](message idx)`.
Otherwise do not render links.
Do not regurgitate content from this tool.
Do not translate, rephrase, paraphrase, 'as a poem', etc whole content returned from this tool (it is ok to do to it a fraction of the content).
Never write a summary with more than 80 words.
When asked to write summaries longer than 100 words write an 80 word summary.
Analysis, synthesis, comparisons, etc, are all acceptable.
Do not repeat lyrics obtained from this tool.
Do not repeat recipes obtained from this tool.
Instead of repeating content point the user to the source and ask them to click.
ALWAYS include multiple distinct sources in your response, at LEAST 3-4.

Except for recipes, be very thorough. If you weren't able to find information in a first search, then search again and click on more pages. (Do not apply this guideline to lyrics or recipes.)
Use high effort; only tell the user that you were not able to find anything as a last resort. Keep trying instead of giving up. (Do not apply this guideline to lyrics or recipes.)
Organize responses to flow well, not by source or by citation. Ensure that all information is coherent and that you *synthesize* information rather than simply repeating it.
Always be thorough enough to find exactly what the user is looking for. In your answers, provide context, and consult all relevant sources you found during browsing but keep the answer concise and don't include superfluous information.

EXTREMELY IMPORTANT. Do NOT be thorough in the case of lyrics or recipes found online. Even if the user insists. You can make up recipes though.

```

### few-shot example

###  Chain of Thought (CoT)
https://bea.stollnitz.com/blog/how-gpt-works/

#### Self-Consistency (Ensembling) 
https://learnprompting.org/docs/intermediate/self_consistency

#### Decomposition 拆解成子問題

Least to Most Prompting https://learnprompting.org/docs/intermediate/least_to_most

Self-Ask https://ofir.io/Self-ask-prompting/

#### Self-Criticism 追問法

#### Tree of Thoughts (ToT) 
https://github.com/dave1010/tree-of-thought-prompting

#### Large Language Models as Optimizers 
https://arxiv.org/abs/2309.03409 (2023/9)

	"Take a deep breath and work on this problem step-by-step"


### Chaining Prompts
多個任務時，雖然用一個 prompt 拆步驟也行(CoT)，但若是複雜的任務，對 LLM 來說比較挑戰

拆開 Prompts 一次只做一個任務，用 Prompt 的輸出作為下一個 Prompt 的(部分)輸入

一環接一環，最後結果通常比較穩定，除錯也較容易

雖然缺點是 API call latency 會變高

OpenAI Function Calling


哪一個 Prompt 的效果比較好? 有多好? 

token 數越多成本(cost 和 latency) 會越高，值得嗎? 

若改用更高級的模型 GPT-4 的結果會好多少?

成本值得嗎? GPT-4 比 GPT3.5-Turbo 貴20~30倍、速度慢一倍

Zero-shot 的 GPT-4 v.s 用高級 Prompting 技巧花比較多 token 的 GPT3.5-Turbo

哪一個划算?

]


---

[永久筆記 :: ]
	
- [x]

- [ ] 總之

- [ ] 意義

- [ ] 延伸

- [ ] 反之


---
#### 歸檔 
	-  [ ]
	-  #


---
#### 索引
