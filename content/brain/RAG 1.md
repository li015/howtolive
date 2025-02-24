---
Create_time: 2024-04-10 16:52
aliases: 
Unsolved: 
annotation-target:
---

---
[Cite ::  https://blog.darkthread.net/blog/vector-db-concept/]
[Last_modified : : `$= dv.current().file.mtime`.]


---
##### [notes :: 
 [Embedding](https://blog.darkthread.net/blog/text-embedding-ada-002-lab/)
 Approximate Nearest Neighbors (ANN)
	[最鄰近搜索（Nearest Neighbor Search, NNS）](https://zh.wikipedia.org/zh-tw/%E6%9C%80%E9%82%BB%E8%BF%91%E6%90%9C%E7%B4%A2)
	 [K-Means (k-平均演算法，K-Nearest Neighbors/KNN)](https://zh.wikipedia.org/wiki/K-%E5%B9%B3%E5%9D%87%E7%AE%97%E6%B3%95)
	  Locality Sensitive Hashing (位置敏感雜湊法)
圖論的 Hierachical Navigable Small World (HNSW) 
直覺做法是用德勞內三角剖分法(Delaunay Triangulation Algorithm)建立所有點的圖結構，但此法有路徑效率不佳的問題。NSW 改良做法是將點一一放回去時跟最近的三個點建立連線，之後將線區分為長連結跟短連結，先用長連結快速度跳到目標附近，再走短連結到達目的節點。(先粗快，後細慢)  
改良版 HNSW 將路徑分層，確保可以穩定先長路徑再短路徑走到目的，雖然會多耗用記憶體記錄多層路徑，卻能有效提升搜尋速度及品質。
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
