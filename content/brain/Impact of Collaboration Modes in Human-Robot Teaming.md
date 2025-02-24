---
Create_time: 2023-11-07T08:27:00
aliases:
  - proposal
Unsolved: 
annotation-target:
---
#myresearch 


### **A Study on Impact of Collaboration Modes in Human-Robot Teaming**
Simulated Expriment
---
### Introduction
- The unmanned construction site is difficult to achieve in reality because of the uniqueness of every construction site and the risk of unpredictable situation.
- Researchers’ interest with respect to HRC has mainly focused on safety issues (De Santis et al., 2008, Bicchi et al., 2008).
- Emerging attention is given to how to enhance human perception (e.g. trust, technology acceptance, robot as a teammate, etc.) toward robots.
---
### Introduction
- **To enhance human perception** (especially in construction domain) **towards robots as teammate**
- A social robot should...(Breazeal, C., Dautenhahn, K., Kanda, T. (2016)
	- communicate naturally with people
	- provide effective social and task-related support to people.
	- a wide range of social-cognitive skills
	- to understand human behavior
	- to be intuitively understood by people.

---
### Thesis statement
- A robot for construction site should...
	- recognize various situation in construction site
	- realize worker's intention
	- worker is familiar with its response
	- perform general and simple task
---

### Hypothesis
- On construction sites, it is more feasible to work with robots that perform general and simple work than to operate robots that can perform complex and precise for a single task.
---
### Experiment Design
- 比較:
	- 機器人執行一個複雜工作 vs 機器人和人一起工作
	- 人人合作vs 人機合作
- 測試:
	- 信任量表
	- 完成速度
---

### literature review on HRC
#### Construction scenarios

1. [Worker-in-the-Loop Cyber-Physical System for Safe Human-Robot Collaboration in Construction](https://ascelibrary.org/doi/pdf/10.1061/9780784483893.132?download=true)
	1. proposed CPS allows the co-bot to **adjust its speed** relative to the subject’s physiological states with 93.70% accuracy.
	```ASCE cannot access```
	
---

1. [Intention Estimation in Physical Human-Robot Interaction in Construction: Empowering Robots to Gauge Workers’ Posture](https://ascelibrary.org/doi/abs/10.1061/9780784483961.065)
	1. this study leverages **computer vision techniques** to enable collaborative robots to estimate worker positions and poses.
	2. enables robots to estimate subjects’ postures with a **63.3%** precision
		- quite low?
---
3. [Toward Human-in-the-Loop Construction Robotics: Understanding Workers’ Response through Trust Measurement during Human-Robot Collaboration](https://ascelibrary.org/doi/abs/10.1061/9780784483961.066)
	1. The participants’ trust in the robot was measured using the **Trust Perception Scale-HRI**. The Wilcoxon signed-rank test revealed that the human-in-the-loop approach could lead to significantly higher levels of **trust**.
---
1. [Feasibility of Virtual Avatar Simulator for Human-Robot Collaboration Training in Construction](https://ascelibrary.org/doi/abs/10.1061/9780784483893.173)
	1. EEG signals were used to assess subjects’ sustained attention during the training process
	2.  a comparative experiment : VR avatar
---
1.  A survey on teaching workplace skills to construction robots
	1. Review paper
	2. future trend: 
		1. **HRC Learning from Observation**
		2. **BIM-based task planning and knowledge transmission**
---
#### Other scenarios
6. 應用於辦公室情境之人機互動：以互動強化方式達成機器人行為調適之學習
	1. 測試強化學習
7. 在複雜環境中偵測參與度並建立人機互動: 
	1. Engagement 合併 NLP 判斷是否engaged，robot測試人類intention
---
8.  Anticipatory Perceptual Simulation for Human-Robot Joint Practice: Theory and Application Study
	1. History-based anticipatory simulation
	2. Inter-modal connection reinforcing
	3. fluency and efficiency in human-robot teams
---
10. Human–Robot Collaboration in 3D via Force Myography Based Interactive Force Estimations Using Cross-Domain Generalization
	- Interactive hand force was estimated during moving a wooden rod in 3D with a Kuka robot
	- to investigate the 2D-based TL-CDG-1 **transfer learner’s ability to predict** out-of-domain HRC target data from unseen 3D pHRI platform.
[[@zakiaHumanRobotCollaboration2022]]
---
10. 醫療人員與微創手術機器人協作環境之最短距離推導
	1. 基於第三方攝影機
	2. 距離演算
11. 基於手勢辨識之多機器人與人互動之應用
	1. 多機器人排列跟人類手勢的關聯
12. 基於影像之協作型手術導引機器人
	1. 基於影像辨識 
	2. 計算機器手臂距離
---
### Method 

#### Robot learning & Control 

Learning from Observation([[LfO]])

Learning from demonstration([[LfD]])

---
#### Human Data: Bio-Signal Measurement
- how to investigate motor control, performance, and tissue loading in ecological contexts

![[Pasted image 20231113083319.png]]
[[@adamczykWearableSensingUnderstanding2023]]

---
 #### HRC via force myography (FMG)
- FMG: useful in determing hand gesture 
- CDG: pretraining a model to **transfer** knowledge between two unrelated source

---
#### How about adjusting human motion
##### Three basic methods to FEEDBACK: 
1. using summary information to drive high-level behavioral change;
2. using instantaneous measurements to change low-level movement patterns through biofeedback; 
3. and incorporating measurement technology into wearable devices that directly alter movement.
[[@adamczykWearableSensingUnderstanding2023]]



---
#### Issue on human data
1.  data representing different ecological contexts is sure to represent the context, and not just variable test protocols.
2. Richness vs. simplicity: data richness (from many sensors) and true ecological validity (few enough sensors to forget about them)
3. Typical signals vs. outlier events:
4. Usability vs. insight:
[[@adamczykWearableSensingUnderstanding2023]]

---
#### Data Processing
![[Pasted image 20231113094611.png]]

---
#### Evaluate

1. [On the quantification of human-robot collaboration quality](https://www.scopus.com/record/display.uri?eid=2-s2.0-85150888787&origin=scopusAI)
	1. proposes quality index (HRC–QI), aiming to assess the flexibility, performance, cost, and quality aspects


---
#### Related statement
1. Whether **Human-robot collaboration improves work performance**:
	1. [Lean back or lean in? Exploring social loafing in human–robot teams](https://www.scopus.com/record/display.uri?eid=2-s2.0-85175838985&origin=scopusAI)
		1. One group of participants worked on the task alone, while the other group worked with a robot team partner
		2. This suggests that participants may have searched the boards less attentively when working with a robot team partner
---
2. Modeling and Control of Trust in Human-Robot Collaborative Manufacturing [[@sadrfaridpourModelingControlTrust2016]]
	1. The robot speed can be controlled in three different modes: 
		- manually by the associate,
		- autonomously through robust intelligence algorithms, or 
		- collaboratively by the combination of manual and autonomous inputs.
	1. although the robot performances in the manual mode are higher than those in the autonomous and collaborative modes, the trust increments are lower as compared to the corespondent values in other modes.
---
3. [Evaluating the Perception of Human-Robot Collaboration among Construction Project Managers](https://www.scopus.com/record/display.uri?eid=2-s2.0-85128954815&origin=scopusAI)
	1. be seen as a teammate when its movement was less unpredictable, it was seen as more productive than human workers, it was considered durable, it remained constantly active, it took its surroundings into account before moving, it worked well alongside human workers, it was not unreliable, and it made the task more predictable.
---

2. **Shared mental models and proactive behaviors <br>enhance teamwork**

4.  **Trust and mutual understanding are key factors**
	1. [Effective Human-Machine Teaming through Communicative Autonomous Agents that Explain, Coach, and Convince](https://www.scopus.com/record/display.uri?eid=2-s2.0-85171266855&origin=scopusAI)
		1.  communicate insights into their capabilities and limitations to a human collaborator
		2. coach and influence human teammates' behavior
		3. convince and mediate trust in human-robot interactions
---

![](/Resources/chart.png)

---
#### **In what ways can robots and humans complement each other's skills and abilities to achieve better results?**

---
### Hypothesis
1. On construction sites,  **in what ways can improve trust in robot** 
2. 無法驗證工地機器人目前的表現
3. 如果不在工地還有意義嗎
 
| 設計工具     | 醫療場景 | 營建場景 |
| ------------ | -------- | -------- |
| voice        | 諮詢  、人類指令   |      諮詢、人類指令    |
| vision       | 手術     |     QA      |
| locolization | 居家照護 |     QA     |
| kinematics   | 手術     |      施工    |
|   expression           |    諮詢      |   (不太需要)      |

---
4. 回到最初的想法，工地機器人應該做簡單的事情(才會被廣泛採用)
5. 醫療機器人也應該做簡單且到處都需要的事情
6. 簡單的事情: 搬東西、找資料放在哪裡
7. LfO: 希望直接觀察日常生活、就能建立機器人的認知模型
8. 奇妙的想法: 比較人類共同經歷/未經歷機器人學習(RL)的過程，是否提高信任感?
9. 是一種personalize
---
### Experiment Design
- use(propose if can) method:
	- decision making model
	- Reinforce learning model
	- human-robot team design(HRTD): learning from observation
		- 基於chatgpt可能可以回應人類指令
		- 理解口頭指令 要 label 到實際動作(how?)
---
- 比較:
	- 機器人執行一個複雜工作 vs 機器人和人一起工作
	- 人人合作 vs 人機合作
	- reactive(指示才能做), active(會自己做) and proactive(不須指示)
	- 已經訓練好的機器人 vs 從頭訓練機器人(如何控制實驗時間)
- 測試:
	- 信任量表
	- 完成速度
	- 人類參與感
---

#### 可能的互動模式
![[Pasted image 20231113161612.png]]

---
### Reference experiment
1. [Fostering short-term human anticipatory behavior in human-robot collaboration](https://www.scopus.com/record/display.uri?eid=2-s2.0-85119920514&origin=scopusAI)
	1. showing robot's intent through anticipatory cues significantly increased team efficiency,
	2. 實驗設計可複製!
	3. 分析數據後，沒有明確回應假設H1,H2
	4. ![[Pasted image 20231113113938.png]]

---
1. [A Personalized Computational Model for Human-Like Automated Decision-Making](https://ieeexplore.ieee.org/document/9371373)
	1. the DM process needs to be automated. It was found that the performance of a team is improved when all the team members share the same mental models.
[[@jiangPersonalizedComputationalModel2022]]

3. A Multimodal Learning-from-Observation Towards All-at-once Robot Teaching using Task Cohesion
	1. While previous studies have focused on step-by-step instructions, all-at-once teaching allows users to teach the behavior more naturally.
---
1. 人機合作有哪些模式、哪些方法、
2. 營建產業目前機器人
3. [[openAI 營建小秘書]]
4. 公開資料 營造法規
5. 醫療產業 聊天機器人
6. 


---
#myresearch
[Cite ::  ]
[Last_modified : : `$= dv.current().file.mtime`.]