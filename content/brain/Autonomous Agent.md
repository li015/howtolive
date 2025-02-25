---
Create_time: 2024-01-25 16:38
aliases: 
Unsolved: 
annotation-target:
---

---
[Cite ::  ]
[Last_modified : : `$= dv.current().file.mtime`.]


---
##### [notes :: LLM + memory(短期記憶 context window) + [[RAG 1]](長期記憶) + Planning skills + Tool use  ]

 

又叫做 Plan-and-Execute 給目標自動執行

目前最前沿的研究，不斷出新的實驗品 AutoGPT,  BabyGPT, MetaGPT 等等

由 LLM 自主驅動的代理人，自主思考和執行任務，成為通用問題解決者
https://github.com/Significant-Gravitas/AutoGPT


agents聊天
https://github.com/joonspk-research/generative_agents

https://github.com/e2b-dev/awesome-ai-agents

### ChatGPT UI custom Agent
	knowledge
	
		可上傳檔案，也就是做 [[RAG]] 資料檢索
	
	Action
		
		可串接你的或是第三方的 HTTP API，透過 OpenAPI spec 設定
	
	內建 Tools
	
		Web Browsing (用 Bing)
		
		DALL-E 產生圖片
		
		Code Interpreter 讓模型具備執行 Python 程式的沙箱能力，可以處理用戶上傳檔案、分析數據產生圖

### Assistants API
在你的 App 上，剩下的開發工作是

把用戶訊息傳給 [[OpenAI]]

不需要做 memory 紀錄對話

不需要做 [[RAG 1]]## 支援 Parallel function calling

接著 [[OpenAI]] 回傳 AI 訊息

直接回傳訊息結果，或是要求你執行 Function

(如果需要) 執行你的 Function，回傳給 [[OpenAI]]

執行後，把結果回傳給 [[OpenAI]] 

支援 JSON mode
### Multimodal API


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
