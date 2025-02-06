# Practice Consultation 6 <br />Particulates in Surgery

## Opening Statement

I’m a doctor that is involved with dental surgery at USC. In one of our studies, we examined the amount of particulate matter that builds up in our operating room over the course of our procedures. We’ve already analyzed the data and written up the results, but we want some help responding to reviewer comments.  
Our main goal was to determine how much particulate matter increases in the operating room during these procedures. We used an optical particle counter placed in the room (60cm from the procedure site on the surgeon’s left) and recorded the particulate levels before and during surgery.  
We submitted this as a paper but one of the reviewers was really concerned about the statistics. We used t-tests to compare particulate matter before and during surgery – however, one reviewer said that since we examined many different particle types, we should use an ANOVA. I also heard we could use a paired t-test. So—how can we determine whether particulate matter increased during surgery?

## Debriefing

### Population

Intended: All patients that undergo oral surgery.  
Actual: Patients that underwent oral surgery at USC.

1. <u>Were all patients undergoing the same procedure?</u> No. Generally there were 4 different categories of procedures, but we didn't look at procedure type. <font color = #ff8c00>*Particulate matter could vary based on procedure type.*</font>
2. <u>How many patients did you examine?</u> We examined 58 total surgeries, but our sample size is 2,784 because of all the readings. <font color = #ff8c00>*In this case, the unit of analysis should really be the person/procedure and not the individual sensor reading.*</font>

### Intervention

NA 

3. <u>How long were the surgeries?</u> The surgery length ranged from a couple of minutes to about 60 minutes. But we didn't record this data. We just put all the pre-surgery measurements into the "before" group and all the during-surgery measurements into the "after" group. <font color = #ff8c00>*BIG problem! If they pooled all observations together, this means that longer surgeries will be overrepresented. Furthermore, the effect of "build-up" of particulate matter should be assessed.*</font>
4. <u>What is the air filtration system like in these rooms?</u> The air filtration system we have fully cycles the air in the room every 3-4 minutes.
5. <u>Who performed the surgeries?</u> It could have been any of our surgeons. <font color = #ff8c00>*Particulate matter may vary based on something the surgeon routinely does.*</font>
6. <u>What time of day were the surgeries performed?</u> Most of these surgeries were performed in the morning, but it could have been any time of day. <font color = #ff8c00>*Particulate matter may be different at different times of the day.*</font>

### Comparison

Ambient particulate matter during surgery was compared to pre-surgery.

7. <u>What was compared in your analysis, exactly?</u> We performed an independent samples t-test comparing all pre-surgery observations to all during-surgery observations.

### Outcome

Amount of particulate matter.

8. <u>You said that you had many different particle types?</u> Yes, we did look at 5 different types of particles depending on their size (&lt;1.0, 1.0-2.5, 2.5-5.0, 5.0-10.0, and 10.0-25.0 µm). We ran a t-test for each of these.

### Time

Measurements were taken multiple times during each surgery.

9. <u>How many times did you assess particulate counts during surgery?</u> We took a baseline measurement and then particulate counts during surgery were ascertained in 15-second sampling intervals.
10. <u>Did you analyze the effect of time?</u> No. And honestly even though we have multiple measurements throughout the surgery, we didn't record the time for each measurement.
11. <u>Is there any way you can ascertain time somehow?</u> No. We don't have the resources for that. We just want to respond to the reviewers and show the community that particulate counts increased during surgery.


### Thoughts

<font color = #ef0000>Yikes. There should be a time series analysis of how particulate matter changes, but unfortunately the data is not there. At a minimum, they shouldn’t pool everyone’s readings together. I’d take every operation’s baseline value and compare it to the mean value during surgery using a paired t-test. Depending on the sample size, we could explore stratifying by procedure type. We would conduct a paired samples t-test comparing pre-surgery to during-surgery for each of the particulate sizes. The reviewer’s concern could be addressed by performing a false discovery rate correction of the p-values. </font>