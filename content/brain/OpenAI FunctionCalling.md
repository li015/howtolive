---
Create_time: 2024-01-25 16:42
aliases: 
Unsolved: 
annotation-target:
---

---
[Cite ::  ]
[Last_modified : : `$= dv.current().file.mtime`.]


---
##### [notes ::   

### 支援 Parallel function calling

可以一次回傳就告訴你可以同時執行哪些 functions

例如上述天氣查詢案例中，若用戶同時問多個地方的天氣…..

原先: 需要多次 LLM API 往返

新功能: 一次 LLM API 往返就完成

詳見 https://platform.openai.com/docs/guides/function-calling

### 支援 JSON mode

在不需要執行外部工具的場景，API 呼叫可以設定 JSON mode，要求 GPT 一定要回傳 JSON 格式 

你的 prompt 仍必須要寫要求模型回傳 JSON

這樣可以保證 GPT 回傳的一定是合法的 JSON

這樣就可以不需要用到 function calling 了，可以**省一點 tokens**

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
