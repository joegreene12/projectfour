<CENTER>
<FORM name="theForm">
<TABLE BORDER=3 CELLSPACING=0 CELLPADDING=0>
<TR>
<TD>Are you a....</TD>
<TD align=center><input type=radio name="sme" value="Beginner" onClick="s()" checked>Beginner
<input type=radio name="sme" value="Novice" onClick="m()">Novice
<input type=radio name="sme" value="Expert" onClick="e()">Expert</TD>
</TR>
<TR><TD colspan=2><BR>
<center><input type=button value="Start Typing Test" name="start" onClick="beginIt()"></center><P>
<textarea name="given" cols=53 rows=3 wrap=on onFocus="cheat()"></textarea></TD>
</TR>
<TR><TD colspan=2><center><input type=text name="typed" size=45>
<input type=button value="DONE"  name="stop"  onClick="stopIt()"></center></TD>
</TR>
</TABLE></FORM>
</CENTER>
