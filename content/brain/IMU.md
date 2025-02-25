IMU是**==陀螺 (Gyro)==** 與**==加速度計 (Accelerometer)==**
依運作原理可分成 MEMS、光纖陀螺和雷射陀螺三種
- Bias 偏差：量測值與真值的常數偏移
- Scale factor 尺度因子：量測值與真值相較的縮放比例，真值越大，尺度因子造成誤差越大
- Non-orthogonality (misalignment) 非正交：因為陀螺與加速度計一般是 x, y, z 三軸組成，如果三軸間彼此不正交，真值會在軸間產生投影造成誤差
- - Random Walk：高斯常態分佈的雜訊，相關時間 (correlation time) 遠小於採樣時間，行為上與白噪聲相同
- Bias instability：一種低頻雜訊，因其表現行為而被視為系統誤差 bias 的波動，**==是應用上重要的指標參數，也就是上面規格表的陀螺飄移==**
- 間序列的資料其隨機誤差一般用==**阿倫方差 (Allan Variance)**== 分析，概念是將資料依特定時間長度分段，各段分別取平均，再求相鄰段平均值的差值序列，最後計算差值序列的方差。
https://mapostech.com/imu/