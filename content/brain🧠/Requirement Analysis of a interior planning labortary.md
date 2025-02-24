# Requirement Analysis
李庭儀(r09521625@ntu.edu.tw)
### Objective

The primary objective of this platform is to provide users with a user-friendly, efficient, and powerful tool for creating and manipulating 3D renderings. By incorporating User-Oriented Design principles, we aim to ensure that the platform meets the specific needs and preferences of our target users.

### Target Users

- Architectural Designers(3): Integrate various professional information, communicate with clients on space utilization requirements; they need creating the rendering quickly.

- Structural Engineers, MEP Engneers(10): Calculate and provide 3D plans based on spatial requirements; they need getting the results of changes in architectural design quickly.

- Environmental Engineers(3): Calculate carbon emissions based on the data of a building project, or lead design results based on carbon footprints; they need accesing and storing considerable data.

- Project Manager(2): Manage project timelines and quickly understand the impact of change.

- Clients(5): Understand the basic progress of the project.

- Admin(2): Managing this platform.

The above users will be in different regions to collaborate, but ther are assumed to be within the scope of Taiwan, the total number of around 20~40 people which differs due to the scale of a project.

### Platform Features

The platform is referenced from Nvidia's [Omniverse](https://www.nvidia.com/zh-tw/omniverse/), hoping to integrate different professional design contents(architectural, structural, MEP, carbon footprint) into the project seamlessly; the expected features and service quality are as follows: 

1. **High-Performance Computing:** Enable users to render large-scale projects with minimal processing time. 

2. **Artificial Intelligence Integration:** Enhanced by AI, it is possible to quickly anticipate the outcome of a decision based on past data, rather than having to go through different professions' evaluations to get to the answer.

3. Break 3D data silos:  Intergrate data uniformly in one environment, whether from large enterprise teams or multiple subcontractors

4. **Collaborative Tools**:  Cross-area co-collaboration features, including real-time co-editing, version control and commenting features to support collaborative rendering projects.

### Using Scenario

The most important feature is that different users can modify different parts of the model at the same time and get a collaborative result in an acceptable amount of time:

| User1                                          | User2                                          | ... | World                                               |
| ---------------------------------------------- | ---------------------------------------------- | --- | --------------------------------------------------- |
| perform modification in simulation environment |                                                |     |                                                     |
|                                                | perform modification in simulation environment |     |                                                     |
|                                                |                                                |     | revise simulated model and return rendering outcome |
| get simulation outcome                         |                                                |     |                                                     |
|                                                | get simulation outcome                         |     |                                                     |
| completes performance                          | completes performance                          |     |                                                     |

Another use case is that users provide text or images and utilize machine learning technology to quickly generate the desired resources and store them in a database for future use in a real project.

| User1                               | ... | World                              |
| ----------------------------------- | --- | ---------------------------------- |
| input text or other types of promts |     |                                    |
|                                     |     | generate outcome(image, 3d entity) |
| confirm to save the outcome         |     |                                    |
|                                     |     | store it in database               |
| completes performance               |     |                                    |

Designers and engineers can seamlessly modify and read the simulation results; Clients and PMs only need to see the simulation results of the confirmed version.

![[Drawing 2024-03-07 23.23.14.excalidraw]]
- 
- 是否都在manager運算
- 使用者畫面不需GPU嗎?
- interface width
### Proposed system framework
![[req ana proposed framwork]]


### Computing Capacity
According to the past experience, 3~6 persons are required to work on a 20G model at the same time, based on nvidia's Qualified System Catalog recommended specification configurations:
1. Server: PowerEdge R750([r750xs-spec-sheet.pdf (dell.com)](https://i.dell.com/sites/csdocuments/Product_Docs/en/r750xs-spec-sheet.pdf))

1. GPU: L40 ( PCIe Gen 4 )
	
	Technical Specifications  
	GPU Architecture NVIDIA Ada Lovelace Architecture  
	GPU Memory 48GB GDDR6 with ECC  
	Memory Bandwidth 864GB/s  
	Interconnect Interface PCIe Gen4 x16: 64GB/s bidirectional  
	NVIDIA Ada Lovelace Architecture-  
	Based CUDA® Cores  
	18,176  
	NVIDIA Third-Generation RT Cores 142  
	NVIDIA Fourth-Generation Tensor  
	Cores  
	568  
	RT Core Performance TFLOPS 209  
	FP32 TFLOPS 91.6  
	TF32 Tensor Core TFLOPS 183 I 366*  
	BFLOAT16 Tensor Core TFLOPS 362.05 I 733*  
	FP16 Tensor Core 362.05 I 733*  
	FP8 Tensor Core 733 I 1,466*  
	Peak INT8 Tensor TOPS 733 I 1,466*  
	Peak INT4 Tensor TOPS 733 I 1,466*  
	Form Factor 4.4" (H) x 10.5" (L), dual slot  
	Display Ports 4x DisplayPort 1.4a  
	Max Power Consumption 350W  
	Power Connector 16-pin
### Usability

### Budget

## Reference
- [Qualified System Catalog (nvidia.com)](https://www.nvidia.com/en-us/data-center/data-center-gpus/qualified-system-catalog/?start=0&count=10&pageNumber=1&searchTerm=)
- [NVIDIA L40S Datasheet](https://resources.nvidia.com/en-us-l40s/l40s-datasheet-28413
- [PowerEdge R750 機架式伺服器 | Dell 台灣](https://www.dell.com/zh-tw/shop/ipovw/poweredge-r750#techspecs_section)

