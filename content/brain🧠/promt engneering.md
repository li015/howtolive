---
Create_time: 2024-04-18 15:31
aliases: 
Unsolved: 
annotation-target:
---

---
[Cite ::  ]
[Last_modified : : `$= dv.current().file.mtime`.]


---
##### [notes ::  
 未來應更多採用系統化的自動提示最佳化方法，最佳化後的提示可能呈現出意想不到的奇特特徵(https://arxiv.org/abs/2402.10949)


- 測試資料需要人工準備、還是可以自動合成?
- 評估的 Evaluation 的方式是?

- 沒有標準答案的 **生成任務**
- 有標準答案的 **分類任務**

# 評測清單

| Tools                  | Cite                             | 現狀                                                                     |
| ---------------------- | -------------------------------- | ---------------------------------------------------------------------- |
| APE                    | paper + code                     | 無法開箱即用                                                                 |
| gpt-prompt-engineer 👍 | colab                            | 最簡單也陽春，會用 google colab 就可上手<br><br>需要數分鐘跑完<br><br>適合想快速有一個最佳化的結果來使用    |
| APO                    | paper                            | 無法開箱即用                                                                 |
| OPRO                   | paper + code                     | 無法開箱即用                                                                 |
| PE2                    | paper + code                     | 無法開箱即用                                                                 |
| AutoPrompt 👍          | paper  <br>command line 和 Web UI | 可自動合成 dataset 及人類標註流程<br><br>需要花時間最佳化，數十分鐘來跑完<br><br>適合想認真最佳化單一 prompt |
| DSPy 👊                | paper  <br>programming framework | 無法開箱即用<br><br>程式最硬核，陡峭的學習曲線<br><br>可對付 prompt chaining 例如 RAG 的最佳化     |
]




---
##### [thoughts ::  ]


---
#### 索引
