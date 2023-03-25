*********************************************************************
 如何在 MyMeets 中，取得像素及調色盤資料
*********************************************************************


1. 準備 MyMeets 1.4 版本 (MyMeets_v1_4_fixed.zip)
   
   - 建基於 v1.4 版本


2. 在 MyMeets 中的 assets/characters 資料夾

   附上 0026 角色資料(0026.xlsx)，以便參考

   例如： 取出 0024.zip (忍者)
   - 每個角色均由 4 個部份組成，所以有 4 個資料檔 
     - Char_A.txt (頭飾/其他) --- 7 幅圖資料 (44x38) 38*7=266
     - Char_B.txt (全身) --- 9 幅圖資料 (44x50)  50*9=450
     - Char_K.txt (附帶物品) --- 4 幅圖資料 (44x26)  26*4=104
     - Char_M.txt (眼/表情) --- 15 幅圖資料 (44x16) 16*15=240

3. 轉換工具，使用 Excel 製作：

   - 把 template.xlsx 複製及命名為 0024.xlsx，為角色專用


4. 把 binary 轉換 text 數據，以便 Excel 再轉換到像素資料

   使用 Hex editor (https://hexed.it)
   - 開啟檔案 Char_M.txt (可以使用 drag-and-drop)
   - 向資料 右-Click 選單
     - 選「全選」
     - 再選「匯出選取的位元組為程式碼片段」
       - 選 Plain Data -> single line -> 16 進位
     - 從「程式碼片段」中複製全部 (結果只有一行資料)
     - 在 Excel 轉換工具，在 (M 頁) 的 Cell(A1) 貼上資料
   - 相關的資料將即時轉換成「像素」資料，並在該頁瀏覽結果 (角色形象)

5. 按 step 4 處理 A, B, K 餘下 3 個資料

6. 修改 spritesheet.html 
   - 把 Excel 內 A, B, K, M 頁中的 javascript (var 部份) 複製到 spritesheet.html 
     - 即每頁中有 var 的各行
   - 然後執行 spritesheet.html (用 browse 開啟) 查看結果

7. 在 spritesheet.html 中顯示的圖片，另存需要的圖(spritesheet)

   - 在 spritesheet 中身體部份(Char_B)，每個 frame 圖像(共 9 個 pose)：

     1) 包括 (紅、黃、藍) 3 色位置點，用途為指示其他部份的顯示位置
     2) 左上角首 4 個像素：
        - 第 1 為透明值，第 2-3 為 3 個位置點的原本顏色，以便補色

   - 綠色背景為透明色，需自行清除

   - 位置點亦需自行填補原色

   - 有關的調色盤顏色，已由 Excel 工具，把原本 16bits 像素轉為 24bits 像素


9. 附上測試用程式(anim 資料夾)，以便展示及測試 spritesheet


