# Practice Consultation (Cardinal) <br />Particulates in Surgery

## Opening Statement

I’m following up from our earlier discussion. We went ahead and conducted the study as planned and submitted the manuscript, but one of the reviewers had major concerns about our statistical analysis.

We collected a very large number of particulate measurements, which we thought would strengthen the study, but the reviewer questioned whether our statistical approach was valid. Unfortunately, we’re now limited to the data as collected.

We’d like help understanding what went wrong and how we can respond to the reviewer. They were wondering about whether we should use ANOVA to analyze the results since we examined several different classifications of particulate sizes, but we were going to proceed with a paired t-test.

## Additional Information

### Population

1. <u>How many total surgeries were there?</u> We initially wanted to collect data on 100 surgeries but ended up only having the resources for 58. However, we believe that we have enough sample size at 2,784 because of all the readings. <font color = #ff8c00>*There may now be a mismatch between the originally-computed power and actual power that might affect the ability to find significant results. Also, the unit of analysis should really be the person/procedure and not the individual sensor readings.*</font>
2. <u>We did not record procedure type, time of day, or surgeon.</u> <font color = #ff8c00>*We cannot adjust for or stratify by key sources of variability.*</font>

### Intervention

There is no formal intervention.

3. <u>How long were the surgeries?</u> We did not record the total surgery duration. Anecdotally, it varied from 6 minutes to 53 minutes. <font color = #ff8c00>*If this isn't recorded then we cannot adjust for surgery duration.*</font>
4. <u>Can you find out how long the surgeries were from the number of 15-second epochs per surgery?</u> In theory, yes, but we do not have the data broken down by surgery. <font color = #ff8c00>*Uh oh.*</font>
5. <u>Does that mean all the data collected doesn't have any information on which surgery it was for?</u> Correct. We can't link the data to the surgery. All we have is a timestamp but we don't know to which surgery it belongs. <font color = #ff8c00>*BIG problem! If they pooled all observations together, this means that longer surgeries will be overrepresented. Furthermore, the effect of "build-up" of particulate matter should be assessed.*</font>

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