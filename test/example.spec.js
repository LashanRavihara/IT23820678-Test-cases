import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api paasal yanavaa');
  await page.getByText('අපි පාසල් යනවා').click();
});


test('Pos_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.');
  await page.getByText('අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා.').click();
});

test('Pos_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa enavanam mama balan innavaa.');
  await page.getByText('ඔයා එනවනම් මම බලන් ඉන්නවා.').click();
});

test('Pos_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa kavadhdha enna hithan inne?');
  await page.getByText('ඔයා කවද්ද එන්න හිතන් ඉන්නේ?').click();
});

test('Pos_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('vahaama enna.');
  await page.getByText('වහාම එන්න.').click();
});

test('Pos_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta enavaa.');
  await page.getByText('අපි හෙට එනවා.').click();
});

test('Pos_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('aayuboovan!');
  await page.getByText('ආයුබෝවන්!').click();
});

test('Pos_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('magee lipinaya eyaata yavanna.');
  await page.getByText('මගේ ලිපිනය එයාට යවන්න.').click();
});

test('Pos_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ov, eeka hari.');
  await page.getByText('ඔව්, ඒක හරි.').click();
});

test('Pos_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('samaavenna, eeka athvaeradhiimak.');
  await page.getByText('සමාවෙන්න, ඒක අත්වැරදීමක්.').click();
});

test('Pos_Fun_0011 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eeyi, ooka dhiyan.');
  await page.getByText('ඒයි, ඕක දියන්.').click();
});

test('Pos_Fun_0012 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhara innee.');
  await page.getByText('මම ගෙදර ඉන්නේ.').click();
});

test('Pos_Fun_0013 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('poddak inna');
  await page.getByText('පොඩ්ඩක් ඉන්න').click();
});

test('Pos_Fun_0014 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata paan kanna oonee.');
  await page.getByText('මට පාන් කන්න ඕනේ.').click();
});

test('Pos_Fun_0015 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari hari');
  await page.getByText('හරි හරි').click();
});

test('Pos_Fun_0016 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama iiyee gedhara giyaa.');
  await page.getByText('මම ඊයේ ගෙදර ගියා.').click();
});

test('Pos_Fun_0017 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api iiLaGa sathiyee gedhara yamu.');
  await page.getByText('අපි ඊළඟ සතියේ ගෙදර යමු.').click();
});

test('Pos_Fun_0018 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eyaalaa enavaa.');
  await page.getByText('එයාලා එනවා.').click();
});

test('Pos_Fun_0019 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('WiFi');
  await page.getByText('WiFi').click();
});

test('Pos_Fun_0020 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('siiyaa Colombo yanna hadhannee.');
  await page.getByText('සීයා Colombo යන්න හදන්නේ.').click();
});

test('Pos_Fun_0021 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('SMS');
  await page.getByText('SMS').click();
});

test('Pos_Fun_0022 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('"mama iiyee shop ekata gihin badu godak gaththa, eeke mulu mudhala Rs. 50000 pamaNa vunaa. eeta passe mama thava USD 1500 k gevuvaa magee aluth computer eka ganna. magee baeqqku giNumee dhaen thiyenne Rs. 250000 pamaNayi. meevaa okkoma hariyata mathaka thiyaaganna eka godak vaedhagath mokadha salli ivara venna puLuvan nisaa. mama heta udhee 10.30 AM vithara ATM ekata gihin balannam salli laebiladha kiyalaa. anee eeka ikmanata venavaanam godak hodhayi."');
  await page.getByText('"මම ඊයේ shop එකට ගිහින් බඩු ගොඩක් ගත්ත, ඒකෙ මුලු මුදල Rs. 50000 පමණ වුනා. ඒට පස්සෙ මම තව USD 1500 ක් ගෙවුවා මගේ අලුත් computer එක ගන්න. මගේ බැංකු ගිණුමේ දැන් තියෙන්නෙ Rs. 250000 පමණයි. මේවා ඔක්කොම හරියට මතක තියාගන්න එක ගොඩක් වැදගත් මොකද සල්ලි ඉවර වෙන්න පුළුවන් නිසා. මම හෙට උදේ 10.30 AM විතර ATM එකට ගිහින් බලන්නම් සල්ලි ලැබිලද කියලා. අනේ ඒක ඉක්මනට වෙනවානම් ගොඩක් හොදයි."').click();
});

test('Pos_Fun_0023 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('25/12/2025');
  await page.getByText('25/12/2025').click();
});

test('Pos_Fun_0024 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ela machan!');
  await page.getByText('එල මචන්!').click();
});

test('Pos_Fun_0025 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa mata adha Zoom meeting ekee link eka evanna.');
  await page.getByText('කරුණාකරලා මට අද Zoom meeting එකේ link එක එවන්න.').click();
});

test('Neg_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamagedharayanavaa');
  await page.getByText('මම ගෙදර යනවා').click();
});

test('Neg_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata eeka karanna baeee.');
  await page.getByText('මට ඒක කරන්න බෑ.').click();
});

test('Neg_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api passee<br>kathaa karamu.');
  await page.getByText('අපි පස්සේ කතා කරමු.').click();
});

test('Neg_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('waahanaya paaree giyaa');
  await page.getByText('වාහනය පාරේ ගියා').click();
});

test('Neg_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api passee\nkathaa karamu.');
  await page.getByText('අපි පස්සේ\න්කතා කරමු.').click();
});

test('Neg_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oya enavaanam,<br>mama balan innavaa?');
  await page.getByText('ඔයා එනවානම්, මම බලන් ඉන්නවා? ').click();
});

test('Neg_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Nic ekee photo ekak WhatsApp karanna.');
  await page.getByText('Nic එකේ photo එකක් WhatsApp කරන්න.').click();
});

test('Neg_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api Ai use karanavaa');
  await page.getByText('අපි Ai use කරනවා').click();
});

test('Neg_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('"dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana, mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya."');
  await page.getByText('"දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ථ දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන, මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය."').click();
});

test('Neg_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('waahanayak aluthen miladhii ganna oona');
  await page.getByText('වාහනයක් අලුතෙන් මිලදී ගන්න ඕන').click();
});

//UI test can't catch it with code need to see it real time
test('Pos_UI - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mQQ gedhara yanavaa');
  await page.getByText('මං ගෙදර යනවා').click();
});



//this the UI bug that cannot get by script..i got it while testing manually my test cases

test('Neg_UI_0001 - Standard Singlish to Sinhala conversion UI proof', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('puurvakaThanaya');
  await page.waitForTimeout(500); 
  await page.getByText('පූර්වකථනය').click();
  await page.screenshot({ path: 'IT23820678_UI_Proof.png' });
});
