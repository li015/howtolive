#excel
## INDEX+MATCH函數組合（重點推薦，盡量使用這個函數，可以整列引用數據）

在G2單元格中輸入公式：=INDEX(A2:A8,MATCH(F2,C2:C8,0))

說明：

=MATCH(要查找的值，查找的區域， -1、0 或 1)

=INDEX(查找值的區域，第幾行，第幾列)

這裡先利用MATCH函數返回王五再查找區域中處於第幾行，然後再結合INDEX函數進行查找。
**MATCH(****搜尋值，搜尋範圍，比對模式****)**

**INDEX(****儲存格範圍，列位置，欄位置****)**

**1 MATCH(D2,A2:A7,-1)** **傳回在****A2:A7****儲存格範圍中大於或等於****D2****儲存格內容的最小值所在列值。**

**2 INDEX(B2:B7,MATCH(D2,A2:A7,-1),0)** **傳回****B2:B7****儲存格範圍中****1****結果列所在儲存格的內容。**
INDEX(序號，MATCH(檔案路徑，檔案名稱，0)，0)
![](https://www.mop.tw/wp-content/uploads/2021/11/excel%E5%8F%8D%E5%90%91%E6%9F%A5%E6%89%BE4.png)

=HYPERLINK(
INDEX(A棟檔案查詢!G:G, MATCH(A棟!E3, A棟檔案查詢!A:A),0),
IFNA(INDEX(A棟檔案查詢!A:A,MATCH(A棟!E3,A棟檔案查詢!A:A,0)), "Not found")
)