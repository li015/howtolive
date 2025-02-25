---
Create_time: 2024-01-25 11:03
aliases: 
Unsolved: 
annotation-target:
---

---
[Cite ::  ]
[Last_modified : : `$= dv.current().file.mtime`.]


---
##### [notes :: 

先將文本資料拆段落 (chunks)
每個段落建立 index，放到 Vector Database 向量資料庫
根據問題做語意搜尋，找出 “問題字串” 和 “最相關的內容片段” 共 N 筆
把 context 和問題組出 Prompt 再問 LLM]

Prompt 範例:
```
the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer.

{這裡放搜尋出來最相關的 context 資料}

Question: {這裡放用戶問題}
Helpful Answer:
```
![[Pasted image 20240125110357.png]]  
[[Naive method]], as discussed.
[[Agent method]] uses agents for a more robust search.
[[Guardrails method]]uses a semantic similarity layer for a robust but fast search.

1. 資料來源: 載入多種格式文件: CSV, File, HTML, Markdown, PDF 等

	如何處理圖片? 如何處理表格?

2. 各種拆 chunk 的方式: Text Splitters

	最常見是用 LangChain 的 RecursiveCharacterTextSplitter

3. 各種 Vector Store (因為需要快速計算大量 vector 的 cosine 相似性)
	1. 一些老牌資料庫，也支援向量搜尋功能，也值得關注起來
		Redis https://redis.io/docs/interact/search-and-query/search/vectors/
		
		ElasticSearch https://www.elastic.co/what-is/vector-search
		
		PostgreSQL
		
		pgvector https://github.com/pgvector/pgvector (IVFFlat 跟 HNSW)
		
		pg_embedding https://github.com/neondatabase/pg_embedding (用HNSW)
		
		IVFFlat 較省記憶體，但是 HNSW 效能好很多


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
