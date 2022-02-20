---

title: حل مشكلة No android Studio SDK found في Android Studio
description: تم شرح في هذه المقال حل مشكلة عدم تعرف android studio على SDK او السماح بتثبيته من جديد
img: img-no-android-SDK-found.png
alt: حل مشكلة No android Studio SDK found
author: 
    name: الشيخ المختار
    job: مهندس برمجيات
    bio: شاب عربي يهتم بالمجال التقني ويكتب وطور داخله
    image: sheikh-img.jpg
    fb: https://facebook.com/SheikhElMoctar
    qu: https://ar.quora.com/profile/Sheikh-El-Moctar-El-Shinqiti
    tw: https://twitter.com/SheikhElMoctar
tags: 
- Android Studio
- تطوير تطبيقات اندرويد
- حل المشاكل


---

## سبب المشكلة
تكمن في هذه المشكلة احيانا في عدم تعرف Android Studio على مكان تواجد حزمة الSDK التي تم تثبيتها مسبقا
<inbox-worring>
يجب التنويه ان هذه المشكلة تحدث فقط في حال قد قمت بتثبيت **Android Studio** مسبقا وقمت بحذفه من حاسوبك
</inbox-worring>
<inbox-idea>
إذا كان حاسوبك او كمبيوترك المكتبي يعتمد اللغة العربية كاللغة التي يعمل بها النظام فمن المحتمل ان تكون هي المشكلة
</inbox-idea>

## حل المشكلة
لحل المشكلة يجب اتباع الخطوات التالية: 
<step>قم بإلغاء تثبيت النسخة التي قمت بتحميلها</step>
<step>قم بالإنتقال إلى [ارشيف تحديثات Android Studio](https://developer.android.com/studio/archive)</step>
<step>قم بالموافقة على الشروط والاحكام</step>
<inbox-img src="img-step.png" alt="وافق على الشروط المطلوبة من ادارة جوجل"></inbox-img>
<step>اختر النسخة **Android Studio 3.5** واضغط عليه وحملها</step>
<inbox-img src="select-android-studio-3.png" alt=""></inbox-img>
<step>قم بتثبيت النسخة وسيسمح لك بتنزيل SDK Android وقم تحميله</step>
<step>ومبرووك ستكون المشكلة قد حولت</step>

<inbox-error>
اذا استمررت في استخدام النسخة Android Studio 3.5 ستواجه مشاكل كثيرة في انشاء مشاريع جديدة وغيرها من الاخطاء في بيئة التطوير، اقترح لك ان تحدث إلى اخر اصدار
</inbox-error>