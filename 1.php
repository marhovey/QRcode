<?php
	header("Content-type: text/html; charset=utf-8"); 
	$name=$_POST["name"];
	$title=$_POST["title"];
	$adr=$_POST["adr"];
	$org=$_POST["org"];
	$cell=$_POST["cell"];
	$home=$_POST["home"];
	$url=$_POST["url"];
	$email=$_POST["email"];
	$myfile=fopen("index.vcf","w");
	$txt="BEGIN:VCARD\r\n"."N:".$name."\r\nORG:".$org."\r\nTITLE:".$title."\r\nADR;TYPE=WORK:;;".$adr."\r\nTEL;TYPE=CELL,VOICE:".$cell."\r\nTEL;TYPE=WORK,VOICE:".$home."\r\nEMAIL;TYPE=PREF,INTERNET:".$email."\r\nEND:VCARD";
	fwrite($myfile, $txt);
	fclose(myfile);
?>