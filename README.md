*********************************************************************
 �p��b MyMeets ���A���o�����νզ�L���
*********************************************************************


1. �ǳ� MyMeets 1.4 ���� (MyMeets_v1_4_fixed.zip)
   
   - �ذ�� v1.4 ����


2. �b MyMeets ���� assets/characters ��Ƨ�

   ���W 0026 ������(0026.xlsx)�A�H�K�Ѧ�

   �Ҧp�G ���X 0024.zip (�Ԫ�)
   - �C�Ө��⧡�� 4 �ӳ����զ��A�ҥH�� 4 �Ӹ���� 
     - Char_A.txt (�Y��/��L) --- 7 �T�ϸ�� (44x38) 38*7=266
     - Char_B.txt (����) --- 9 �T�ϸ�� (44x50)  50*9=450
     - Char_K.txt (���a���~) --- 4 �T�ϸ�� (44x26)  26*4=104
     - Char_M.txt (��/��) --- 15 �T�ϸ�� (44x16) 16*15=240

3. �ഫ�u��A�ϥ� Excel �s�@�G

   - �� template.xlsx �ƻs�ΩR�W�� 0024.xlsx�A������M��


4. �� binary �ഫ text �ƾڡA�H�K Excel �A�ഫ�칳�����

   �ϥ� Hex editor (https://hexed.it)
   - �}���ɮ� Char_M.txt (�i�H�ϥ� drag-and-drop)
   - �V��� �k-Click ���
     - ��u����v
     - �A��u�ץX������줸�լ��{���X���q�v
       - �� Plain Data -> single line -> 16 �i��
     - �q�u�{���X���q�v���ƻs���� (���G�u���@����)
     - �b Excel �ഫ�u��A�b (M ��) �� Cell(A1) �K�W���
   - ��������ƱN�Y���ഫ���u�����v��ơA�æb�ӭ��s�����G (����ζH)

5. �� step 4 �B�z A, B, K �l�U 3 �Ӹ��

6. �ק� spritesheet.html 
   - �� Excel �� A, B, K, M ������ javascript (var ����) �ƻs�� spritesheet.html 
     - �Y�C������ var ���U��
   - �M����� spritesheet.html (�� browse �}��) �d�ݵ��G

7. �b spritesheet.html ����ܪ��Ϥ��A�t�s�ݭn����(spritesheet)�G

   - ����(Char_B)�� spritesheet �@�� 9 �� pose�A�Y 9 �� frame

   - �C�� frame �� (���B���B��) 3 ��A3 �Ӧ�m�I�A����ܨ�L�����ɪ��۹��m

   - �C�� frame ���W���� 4 �ӹ���

     1) �� 1 ���������Ӭ��z����A�Y�J�����Ȯɤ��ݭnø�e (�{�ɬO�@�غ��)

     2) �� 2-3 �� 3 �Ӧ�m�I���쥻�C��A�H�Ѷ�ɸӳB���쥻�C��

   - ���� spritesheet ���C��A�w�g Excel �u���ഫ�� 24bits ����

     1) �쥻�C������ 4bit ��(16���C��)�A���V16�ӽզ�L�A�C�ӹ����� 16bits
     
     2) 24bits �����A�i�����ϥ�

     3) �p�ϥ� png2code.py �u��A�i�� 24b PNG �ର 16b C++ Array�A�ѬY�Ǩt�Ψϥ�


9. ���W���եε{��(anim ��Ƨ�)�A�H�K�i�ܤδ��� spritesheet

   - �ϥήɻݦۦ�B�z�A�ഫ�z����Φ�m�I�C��
