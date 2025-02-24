---
Create_time: 2024-03-21 11:15
aliases: 
Unsolved: 
annotation-target:
---

---
[Cite ::  ]
[Last_modified : : `$= dv.current().file.mtime`.]


---
##### [notes ::   
We will demonstrate the basic application of Autogen through a test agent provided by the framework, twoagent: a helper agent and a user agent to write and execute code, which will keep communicating with each other until the task is completed.

What type of agent is used depends on the setting of the human input mode, where the user agent either seeks feedback from the human user or returns automatic feedback based on the success or failure of the code execution and its corresponding output. Fully automatic mode means that the program is fully autonomous and semi-automatic mode means that it seeks human feedback in order to complete the task.

 [`AssistantAgent`](https://microsoft.github.io/autogen/docs/reference/agentchat/assistant_agent#assistantagent-objects)
 1. write Python code (in a Python coding block)
 2. receive the execution results and suggest corrections or bug fixes

 [`UserProxyAgent`](https://microsoft.github.io/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects)
 1. triggers code execution automatically when it detects an executable code block in the received message and no human user input is provided
 2. When `llm_config` is set as a dictionary, [`UserProxyAgent`](https://microsoft.github.io/autogen/docs/reference/agentchat/user_proxy_agent#userproxyagent-objects) can generate replies using an LLM when code execution is not performed.
![[Pasted image 20240528172148.png]]

	[`register_reply()`](https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#register_reply)


- manager 
	BY register a reply function 
	broadcasts messages and decides who the next speaker
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
