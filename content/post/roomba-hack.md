---
title: Roomba Hack
tags:
  - Electronics
categories:
  - Electronics
template: article.html
---
Roombaをハックします。メモです。

持っているのはRoomba 621で、スケジュール機能がありません。  
そこでとりあえずの目標として、Raspberry Pi ZeroにArchLinuxを乗せて、Roombaにスケジュール機能を持たせます。

**部品**

- <i class="fa fa-microchip"></i> ROHM BP5293-50  
  7〜26V <i class="fa fa-arrow-right"></i> 5V  
  Raspberry Pi Zeroに対してバッテリーの電圧が結構高いので、降圧します。  
  [秋月電子通商](http://akizukidenshi.com/catalog/g/gM-11188/)で購入しました。

**プロトコル仕様**

[Roombaプロトコルの仕様書](http://irobot.lv/uploaded_files/File/iRobot_Roomba_500_Open_Interface_Spec.pdf)
