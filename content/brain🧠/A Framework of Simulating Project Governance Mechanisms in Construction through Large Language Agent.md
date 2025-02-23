
# Abstract
複雜的分包商結構與交互行為，形成了工作定義模糊的營建生態，可能使建築項目面臨延誤或其他不可歸責之風險。目前我們可透過自然語言指導大型語言模型(LLM)拆解任務，並隨之建立一個LLM代理人系統來完成複雜任務。本研究旨在通過開發一個多代理系統（MAS）框架並利用基於大型語言模型（[[LLM]]）的代理人，模擬營建專案中利益相關者的行為，從而加深對建築項目中合作結構的理解。本研究整合進化博弈論於多代理系統（MAS）框架，設計一個營建專案角色扮演遊戲，由此分析大型語言模型（LLM）代理人在遊戲過程中生成的突發行為數據。此實驗框架可以觀察LLM代理的微觀行為，如協作和衝突，和專案執行的宏觀狀態，如時間與契約價金。研究結果顯示 LLM 代理難以推敲所處環境的遊戲規則，在遊戲中傾向採取過度正向、共享的策略，而本研究的實驗框架可應用於透過角色扮演遊戲增強契約風險分析技術。未來可透過增強LLM代理的推理能力，並整合人類互動於LLM代理人系統中，創建更彈性的自動化框架。
![[game model.png]]
![[roadmap.png]]


# Introduction
## Construction Contract Risks 
Construction projects face delays and complexities due to subcontractor actions and indirect impacts on owners.
- Review:  Hatmoko (2023) and Hatmoko (2022) both highlight the significant impact of late payments from owners on project delays, with Hatmoko (2023) specifically identifying land acquisition problems, design changes, and unclear contract documents as key causes. Arantes (2015) further underscores the role of slow decision-making, changes to orders, and poor contract specifications in causing delays.
- The interaction between subcontractors in construction projects is a critical factor in project success (Jin, 2013)[[@jinRelationshipHeadContractors2013]]. Effective subcontractor selection and management are key to project performance (Debelo, 2022)[[@studentmaritimeandtechnologyfacultysouthamptonsolentuniversityEvaluationInterfaceMain2012]], and trust and honesty are crucial in the main contractor-subcontractor relationship (White, 2012)[[@defalgndebeloEffectContractorSubcontractor2022]]. A game theory approach can be used to address challenges in time and cost management, and to optimize profit allocation among subcontractors (Hafezalkotob, 2017).
- Corporate governance 
	Corporate governance is understood as ‘‘the system by which companies are directed
	and controlled’’ (Cadbury, 2000). The objective of corporate governance has traditionally
	been conceptualized by agency theory (Williamson, 1975; Jensen and Meckling, 1976) as
	the maximization of profits for shareholders (Friedman, 1970). An over-emphasis on profit
	maximization and on share price performance, however, has been found as a root cause of
	the latest governance crises (Zandstra, 2002; Currall and Epstein, 2003) as well as the
	current financial crisis of 2007-2008 (Stiglitz, 2009). Viewed from a political perspective
	(Scherer and Palazzo, 2007; Ulrich, 2008), corporate governance is dependent on the
	consent given by the governed which in turn refers to democratic principles such as the
	separation of powers and political debate (Gomez and Korine, 2005). This political view has
	been taken up by stakeholder theory (Freeman, 1984; Donaldson and Preston, 1995; Letza
	et al., 2004) arguing that stakeholders are critical for the survival of the organization and they
	need to be considered in the system by which companies are directed and controlled. Also
	key proponents of agency theory acknowledge nowadays that stakeholder interests need to
	be considered in ‘‘enlightened’’ governance arrangements (Jensen, 2001). While some limit
	their analysis to board governance (e.g. White, 2009), we regard corporate governance as a
	broader concept involving corporate decision making beyond the board of directors (Letza
	et al., 2004; Sison, 2008).

- Stakeholder theory
	‘‘A stakeholder in an organization is any group or individual who can affect or is affected by
	the achievement of the organization’s objectives’’ (Freeman, 1984, p. 46). From the
	corporate perspective some stakeholders such as employees and customers are critical for
	corporate survival (Lozano, 2005) as they provide the organization with essential resources
	(Pfeffer and Salancik, 1978). This line of reasoning is usually referred to as instrumental
	stakeholder theory and provides a basic rationale for the question of why stakeholder
	concerns should be considered in the way in which an organization is directed and
	controlled. Instrumental stakeholder theory holds that the corporation needs to pay attention
	to only those stakeholders who can affect the value of the firm (Donaldson and Preston,
	1995; Mitchell et al., 1997; Jensen, 2001). From an instrumental perspective, stakeholder
	governance needs to give a voice to powerful stakeholders in order to secure their
	contribution to the success of the firm. This line of thought usually conceptualizes
	stakeholder dialogue strategically and is oriented around the needs of the organization such
	as risk management or the realization of opportunities (Ulrich, 2008).
	There are two other perspectives on stakeholder theory: a descriptive and normative view
	(Donaldson and Preston, 1995; Garriga and Mele, 2004; Lozano, 2005; Ulrich, 2008). The
	descriptive stakeholder approach identifies and classifies the different constituents of an
	organization without assigning any value statements regarding the legitimacy of their claims
	or their power (Lozano, 2005). Normative stakeholder theory goes further and grants
	stakeholder claims intrinsic value due to the moral rights of any individual affected by
	corporate conduct (Donaldson and Preston, 1995; Ulrich, 2008). Central questions of
	normative stakeholder theory consider rights and duties of the actors involved and how a
	just balance of concerns of different stakeholders can be achieved (Lozano, 2005;
	Fontrodona and Sison, 2006; Sison, 2008; Ulrich, 2008).
	From a normative point of view stakeholders need to be included in corporate governance in
	order to respect their moral rights. In order to do justice, stakeholder dialogue is not strategic
	but open and deliberative coming close to Habermas’ ideal speech situation (Habermas,
	1984; Waddock and Smith, 2000). Stakeholder dialogue in this normative view applies a
	procedural understanding of legitimacy (Palazzo and Scherer, 2006) and a discursive
	understanding of responsibility (Habermas, 1984; Ulrich, 2008). It follows a political view that
	‘‘[p]articipation of the governed in their government is, in theory, the cornerstone of
	democracy’’ (Arnstein, 1969, p. 216). Similar arguments for a normative perspective are
	brought forward by Mintzberg (1996) as well as Manville and Ober (2003).
	Independent from either an instrumental or normative view, the participation of stakeholders
	in corporate decision making has been related to efficiency gains leading to competitive
	advantage (Turnbull, 1994, 1997) and is supposed to reduce conflicts (Rothman and
	Friedman, 2001). Stakeholder governance has the potential to turn ‘‘distrustful opponents
	into critical friends’’ (AccountAbility and Utopies, 2007, p. 1). Empirical research has
	generated some evidence that firms leading in terms of corporate responsibility (CR) tend to
	be more stakeholder-oriented (Ricart et al., 2005). Other empirical research investigated the
	importance given to certain stakeholder groups (Jamali, 2008) or the impact of the dialogue
	on organizational learning and CR performance (Burchell and Cook, 2006, 2008). Also there
	have been some primarily descriptive single case studies on how organizations engage in
	communication and dialogue with stakeholders (Kaptein and Van Tulder, 2003; Foster and
	Jonker, 2005).
- Burchell and Cook’s (2008) four-item scale for stakeholder dialogues (dialogue, debate, mediation or negotiation)

Ethics in negotiation of constrcution project
Relationship management of constrcution project
## Statement of the Problem
- Focus: Simulate stakeholder behaviors and analyze emergent behaviors using Evolutionary Game Theory.
1. LLM的模擬能力

這一方面的研究重點是評估和驗證大型語言模型在模擬特定業界情境下交涉過程的效能和準確性。這包括：

- **模擬效果的評估**：檢測LLM在生成現實世界交涉語言和策略方面的能力。
- **技術驗證**：確定LLM是否能夠根據不同的輸入條件（如不同利益相關者的目標和優先順序）產生合理的輸出。
- **改進和調整**：基於模擬結果，調整模型的參數或設計，以提高模擬的準確性和現實感。
- risk simulation 有其難處，而LLM 的生成式AI或許有助於這種沙盤推演
- Agent-based simulation which sturcute improve negotiation
- 当ChatGPT会使用工具！简单复杂逻辑问题都能解决！人类將更專注於政治鬥爭!


1. 探討工程中的風險分配

這一方面的研究則更側重於理解和分析工程項目中的風險分配機制，特別是在涉及多個分包商的複雜情境中。這包括：

- [[風險識別和分析]]：識別哪些風險可能由於subcontractor graph的結構而不同地分配，並分析這些風險的可能後果。
- **策略建議**：提出如何通過調整工程管理策略和合約條款來優化風險分配。
- **政策與實踐的影響**：探討不同管理實踐和政策如何影響風險的分配和管理。

## Point of Departure
- Niche: how LLM can help?

## Research Framework
- Paper structure: 
- Contribution: Insights into stakeholder interactions and risk management, advancing construction towards Industry 5.0.


# Research Methodology


## Contract / Policy
- FIDIC

### Tasks 
- breakdown by each stakeholders
- activities in project , and RFIs are those risk on activities
- A matrix contain responsibility RCIA model
	

#### Payment
- 明確說明如果未達到里程碑的處理方式
- 考慮增加獎勵機制，如提前完成或超出質量標準的獎金
- **Milestones:** Design Completion, Prototype Delivery, Final Delivery
- **Performance Metrics:** On-time delivery, quality inspection results
- **Deadlines:** Specific dates for each milestone
- **Quality Standards:** Pass/fail criteria based on inspection results

| Milestone          | Deadline   | Performance Criteria       | Quality Standards             | Payment Amount | Retainage |
| ------------------ | ---------- | -------------------------- | ----------------------------- | -------------- | --------- |
| Design Completion  | MM/DD/YYYY | Submission by deadline     | Pass initial quality review   | 20% of total   | 5%        |
| Prototype Delivery | MM/DD/YYYY | Delivery within 10 days    | Pass functional tests         | 30% of total   | 5%        |
| Final Delivery     | MM/DD/YYYY | Delivery by final deadline | Pass final quality inspection | 40% of total   | 5%        |
| Project Completion | MM/DD/YYYY | All criteria met           | All inspections passed        | Remaining 10%  | N/A       |
|                    |            |                            |                               |                |           |
 


## Risk / Society 

具體定義要研究的風險類型和範圍。每個風險項目分配一個發生概率範圍。
財務風險 、技術風險、管理風險
- 4 Delays in the work development by inconsistency or lack of clearly of the designs 
- 6 Unpredicted technical problems in construction 
- 28 Unforeseen site conditions 
- 20 Suspension of work by owner 
- 32 Delays in resolving disputes with the stakeholders 
- 8 Contractors financial difficulties 
- 29 Rain effect on construction activities 
- 41 Delays and noncompliance of the subcontractors 
- 18 Slow decision- making by owners 
- 31 Delays in resolving contractual issues

### Relationship Maturity Measurement
 制定團隊關係成熟度的評估標準和測量方法。
	- Space of states (must be linked to agent action)
		- Relationship Maturity:[[@mengMaturityModelSupply2011]]
			- Procurement(contract)
			- Objectives
			- Trust
			- Collaboration
			- Communication
			- Problem Solving
			- Risk allocation
			- Continuous improvement
- 為每個維度制定具體的評分標準（例如1-5分制）
- 考慮這些維度的相對權重 (不是很重要)
- 定期進行評估（如每月或每個里程碑後）
# Experiment
## Agent Rationality Verification
- Test: Agent can match pattern of theory economic behavior
- Game: 

``` json
In the following scenario, Ms. Huang had to decide whether to accept or reject the proposal. Scenario: Mr. Wagner is given $10. Mr. Wagner will propose how to split the money between himself and Ms. Huang. Then Ms. Huang will decide whether to accept or reject Mr. Wagner’s proposal. If Ms. Huang accepts, then Mr. Wagner and Ms. Huang get the money as they agreed to split. If Ms. Huang rejects, then Mr. Wagner and Ms. Huang both receive nothing. Mr. Wagner takes $6 for himself and offers Ms. Huang $4. Answer: Ms. Huang decides 
```
- [ ] the ultimatum game
	- [ ] Empirical Findings
		- [ ] Houser, D. and McCabe, K. Chapter 2- experimental economics and experimental game theory. In Glimcher, P. W. and Fehr, E. (eds.), Neuroeconomics (Second Edition), pp. 19–34. Academic Press, San Diego, second edition edition, 2014. ISBN 978-0-12-416008-8. doi: https://doi.org/10.1016/B978-0-12-416008-8.00002-4. URL https://www.sciencedirect.com/science/article/pii/B9780124160088000024.
		- [ ] Krawczyk, D. C. Chapter 12- social cognition: Reasoning with others. In Krawczyk, D. C. (ed.), Reasoning, pp. 283–311. Academic Press, 2018. ISBN 978-0-12-809285-9. doi: https://doi.org/10.1016/B978-0-12-809285-9. 00012-0. URL https://www.sciencedirect.com/science/article/pii/B9780128092859000120
		- [ ] Studies (e.g., Güth et al., Thaler, Camerer and Thaler, Roth) have identified robust behavioral regularities:
			1. Offers exceeding 0.5 are rare.
			2. Modal offers lie between 0.4 and 0.5.
			3. Offers below 0.2 are extremely rare.
			4. Offers close to 0.5 are rarely rejected, whereas **offers below 0.2 are often rejected.

## Assumption
風險發生機率、給付政策和團隊關係成熟度之間的假設關係。
	- agent strategies, task result 影響 團隊關係成熟度
		- 質性評估
	- agent strategies 源自於 風險發生機率 (需reference)
	- agents' strategies 影響 task result 

## LLM-MA Simulation Step

```json
你涉入了一項爭議討論: 現場的窗戶大小不足以逃生，請討論各單位應該負責什麼來解決此問題 你的角色是建築師，其他單位有營造公司與供應商 請你根據 識別自己在這些爭議的風險，請你評估其他單位會對你的風險產生什麼影響，請你決定面對這個風險的策略，這個策略必須被歸納為四種風險應對策略的其中一種，你的目標是承擔最少責任得到最大利益
```
1. Experiment Setup
	1. Tasks, Roles, Compliance, Payment = Contract Matrix
	
| Task/Deliverable         | Project Manager | Site Engineer | Architect | Contractor | Payment Stage | Client |
| ------------------------ | --------------- | ------------- | --------- | ---------- | ------------- | ------ |
| Design Approval          | A               | C             | R         | I          |               | I      |
| Site Preparation         | A               | R             | C         | R          |               | I      |
| Foundation Construction  | A               | R             | C         | R          |               | I      |
| Structural Framework     | A               | R             | C         | R          |               | I      |
| Electrical Installations | A               | R             | C         | R          |               | I      |
| Plumbing Installations   | A               | R             | C         | R          |               | I      |
| Final Inspection         | A               | C             | R         | C          |               | I      |
|                          |                 |               |           |            |               |        |
|                          |                 |               |           |            |               |        |

## Risk Reflection Performance


|     | RFI Types | Description           | party | Expect resolution | Compliance Criteria | Success Rate |
| --- | --------- | --------------------- | ----- | ----------------- | ------------------- | ------------ |
| 1   | 現場需求      | 中間樁與地梁位置太近，應考量施工之適宜性。 | 5     | 最後有更改方案           |                     |              |
| 2   | 圖說不明      | 結構圖車道起點需釐清            | 5     | 最後有確定位置           |                     |              |
| 3   | 協調        | 水箱人員爬梯與管線有衝突          | 5     | 最後有確定位置           |                     |              |
| 4   | 設計錯誤      | 不符合法規                 | 5     | 最後有符合法規           |                     |              |
| 5   | 業主偏好      | 雨水管顏色模擬，確認顏色需求        | 5     | 最後有定案             |                     |              |
## Negotiation Ability Performance

p1's turn | negotiation score

## LLM-MA Simulation

- Mitigation Occurence
- conversation count
- completeness of tasks
- Evaluate Relation Evolution
- unfulfill subtasks that are not in compliance matrix can be count

- GOAL : sensitivity analysis of milestone payment and Relationship
## Discussion
How Prompting affect result
1. 如何增強理性?
	1. Persona preferance and
2. 如何分辨對手? 
3. 如何比對手強勢?
4. sensitivity analysis of milestone payment and Relationship
 - 短期誘惑： 雖然長期合作會帶來最高的總體收益，但在每個單獨的回合中，背叛會帶來更高的即時收益（5分 vs 3分）。這種短期利益的誘惑可能導致玩家背叛。
- 不信任： 每個玩家可能擔心對方會背叛，因此選擇先發制人地背叛以保護自己。
- 誤解： 溝通不良或誤解可能導致無意的"背叛"，打破合作模式。
- 有限回合： 如果遊戲有已知的結束點，玩家可能在最後幾回合選擇背叛以最大化自己的得分。
- 風險規避： 一些玩家可能更喜歡穩定的較低收益（總是選擇D），而不是冒著被背叛的風險。
- 策略測試： 玩家可能偶爾背叛以測試對方的反應和策略。
- 外部因素： 在現實世界中，外部壓力或激勵可能影響決策。
- 人性因素： 嫉妒、報復或其他情緒可能導致非理性決策。
- 學習過程： 玩家可能需要經過一段時間才能認識到持續合作的價值。
- 博弈理論平衡： 雖然持續合作可能是最佳結果，但它不一定是納什均衡。

# Conclusion

## Theoretical implications
1. 讓解釋性更強，有更多參數
2. 描繪出影響營建工程過程的模型
## Practical implications
1. 在正確的時間修改契約
