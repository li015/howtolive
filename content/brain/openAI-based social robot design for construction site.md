---
Create_time: 2023-11-14 13:14
aliases:
  - proposal
Unsolved: true
annotation-target:
---
#myresearch 
### Topic: openAI-based social robot design for construction site

---
### Introduction

---
**Introduction**
- The unmanned construction site is difficult to achieve in reality because of the uniqueness of every construction site and the risk of unpredictable situation.
- Researchers’ interest with respect to HRC has mainly focused on safety issues (De Santis et al., 2008, Bicchi et al., 2008).
- Emerging attention is given to how to enhance human perception (e.g. trust, technology acceptance, robot as a teammate, etc.) toward robots.
---
**Introduction**
- - **To enhance human perception** (especially in construction domain) **towards robots as teammate**, a possible way is starting with **social robots**.
- A social robot should...(Breazeal, C., Dautenhahn, K., Kanda, T. (2016)
	- communicate naturally with people
	- provide effective social and task-related support to people.
	- a wide range of social-cognitive skills
	- to understand human behavior
	- to be intuitively understood by people.

---
### Thesis statement
- A social robot for construction site should...
	- recognize various situation in construction site
	- realize worker's intention
	- perform general and simple task : **project reporting**, **mobility**


---

####  social robot for construction site

| Interface      | Uses of scenario on site |
| ------------ | -------- | 
| voice           |      Consultation, Reporting    |
| vision           |     QA, construction works      |
| locolization |     QA, construction works      |
| kinematics      |      construction works    |
|   expression      |   (Not really necessary)     |



---
#### TRUST IN ROBOTS

-  **Variability in Trust Levels:** Trust levels in HRC can vary based on the method of interaction, including touchscreen control, joystick control, and verbal control .
-  **Transparency in Decision-Making:** Transparency refers to the clarity and understandability of a robot's actions, intentions, and decision-making processes for the human operator .
- . **Handling Ambiguous Input:** factor influencing trust in HRC is the robotic system's ability to process and respond to ambiguous input.


---
### Thesis issue
   
   **Utilization of LLMs** 
	   - Introduces the use of Large Language Models (LLMs) as intelligent robot assistants in HRC. Such emerging AI technologies, can communicate naturally with human operators and are robust to different speech styles.


---
### RELATED WORK
[[@yeImprovedTrustHumanRobot2023]]
[[@wakeChatGPTEmpoweredLongStep2023]]
[[@olivares-alarcos_review_2019]]

- Revolutionizing Social Robotics: A Cloud-Based Framework for Enhancing the Intelligence and Autonomy of Social Robots
#### TESTING CHATGPT-AIDED SPARQL GENERATION FOR SEMANTIC CONSTRUCTION INFORMATION RETRIEVAL
Digital Construction Ontologies (Zheng et al., 2021)
![[Pasted image 20231118204105.png]]
: 

| Prompt      | Prompt                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| Prompt 1.1  | Based on the given ontology, create a SPARQL query to find the activity and its related agent and location.            |
| Prompt 1.2  | Based on the given ontology, create a SPARQL query to find the activity information about its start time and end time. |
| Prompt 2.1: | Based on the given ontology, create a SPARQL query that lists the agent and location of an activity                    |
|         Prompt 2.2:    |    Based on the given ontology, create a SPARQL query that lists the worker, workplace of an activity                                                                                                                     |
|          Prompt 3:   |        Based on the given ontology, create a SPARQL query to construct a new graph, in which if the activity has an agent, construct new triples that the agent "is an agent in" the activity.                                                                                                                 |
|       Prompt 4:        |        Refine the previous SPARQL query based on the given ontology, that a “workplace” should link to the class dice:Location.                                                                                                               |


#### CONCEPT FOR ENRICHING NISO-STS STANDARDS WITH MACHINE-READABLE REQUIREMENTS AND VALIDATION RULES
- Digital standards
- NLP-based information extraction
- Knowledge representation
- Code Compliance

#### Context-based Ontology Modelling for Database: Enabling ChatGPT for  Semantic Database Management[[@linContextbasedOntologyModelling2023]]


#### LLM-assisted  Knowledge Graph Engineering: Experiments with ChatGPT [[@meyerLLMassistedKnowledgeGraph2023]]

#### Evaluation of ChatGPT as a question answering  system for answering complex questions[[@tanCanChatGPTReplace2023]]

#### ChatGPT: five priorities for research [[@vandisChatGPTFivePriorities2023]]

#### A prompt pattern catalog to enhance prompt engineering with chatgpt. [[@whitePromptPatternCatalog2023]]

How Can ChatGPT Help in Automated Building Code Compliance Checking?

---
#### RELATED WORK
- Allows users to schedule robot movements in natural language (Yang et al., 2023) 

![[Pasted image 20231114132134.png]]



---
#### RELATED WORK
- Allow users to describe the environment and requirements in natural language to guide ChatGPT to arrange robot actions.(Naoki et al, 2023)
![[Pasted image 20231114161009.png]]



---
#### RELATED WORK
- Cloud-based multimodal model for broader collection of user requirements(Abdelrahman Osman et al, 2023)
![[Pasted image 20231114161149.png]]


### DATA

Data: plan report, actual report : key responsibility, scheduling, when is the

safety 
quality


---
### Method
---
#### Method
#### Adoption of ChatGPT ASSISTANT

- **Fine-tuning with OpenAI API:**
	- Utilize the fine-tuning feature provided by the OpenAI API. Submit dataset with prompts to the API for fine-tuning. Adapts the model to specific use case.
---
#### Adoption of ROBOT ASSISTANT

![[Pasted image 20231114161520.png|200x200]]![[Pasted image 20231114171042.png|300x200]]



---
#### proposed architecture

Condition1: The action and response is prepared in AI assistant
![[Pasted image 20231114164628.png]]

---
Condition2: The action and response is append by user
					(whether it have to fine-tune in ChatGpt or not is not sure)
![[Pasted image 20231114165322.png]]

---


### EXPERIMENT DESIGN

---
#### PROCEDURE AND DATA COLLECTION
- Compare two condition:
	- Condition1:
		- The action and response is prepared in AI assistant
		- Users use natural language(limited in prepared action) to control robot
	- Condition2:
		-  The action and response is append by user to AI assistant
		- Users use natural language(not limited in prepared action) to control robot
---

### EXPECTED RESULTS

---
#### EXPECTED RESULTS

-  INTERACTIONS
	- Condition2 will not work as fluent as Condition1
- PERFORMANCE
	- performance score as indicated by completion time
	- self-evaluated performance as indicated by the questionnaire.
- TRUST AND COGNITIVE LOAD
	- NASA TLX questionnaire
	- HRC-QI questionnaire
-
---
### Thank You

---

### REFERENCE

[[@yeImprovedTrustHumanRobot2023]]

[[@wakeChatGPTEmpoweredLongStep2023]]

---
#### 歸檔 

	
#myresearch


---
#### 索引


---
[Cite ::  ]
[Last_modified : : `$= dv.current().file.mtime`.]
