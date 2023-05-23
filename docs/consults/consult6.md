# Practice Consultation 5 <br />Stress Reduction

## Opening Statement

I’m currently a research assistant in a group that examines the effect of stress on college students. We are looking at ways of reducing stress in these college students and want to see the effect of a couple different types of treatments.  
First, we want to see if there is an effect of Ashwagandha root; this supplement has been shown to reduce stress and anxiety in some medical literature. 
Secondly, we want to see if daily meditation can help reduce stress over the long-term.  
Third, we want to see if a technique called “Day Design” can help these students reduce stress. There is a protocol for this method, which gets the participant to plan their day out in scheduled periods of productivity and relaxation.  
How can we set up an experiment to see if these methods work? We could probably recruit about 60 participants.

## Debriefing

### Population

Intended: College students.  
Actual: TBD.  

1. <u>How will you recruit these participants?</u> We were thinking of recruiting them from psychology classes at USC. Is that bad? <font color = #ff8c00>*College students at USC, and students in psychology classes, might not be representative of all students who will be treated.*</font>

### Intervention

One of three treatment conditions: ASH, MED, DAY. 

2. <u>How will you assign participants to treatment condition?</u> We don't know. Can you help with this?
3. <u>Will participants be assigned to only one condition, or will they receive all conditions (i.e., a cross-over design)?</u> We probably only have enough time and resources to assign each participant to one condition. <font color = #ff8c00>*There are a couple different study designs. This rules out doing a within-subject design (where each participant is administered all treatments).*</font>
4. <u>What if the participants already engage in some of these activities?</u> There's no way to account for other stress reduction techniques the students may be performing on their own. <font color = #ff8c00>*You could make this an exclusion criteria.*</font>
5. <u>Could you tell me about the ASH condition?</u> There are standard supplements the students will be instructed to take daily for 2 weeks.
6. <u>Could you tell me about the MED condition?</u> There is an app the students will install on their device and perform daily 10-minute meditation sessions.
7. <u>Could you tell me about the DAY condition?</u> There is a YouTube video the participants will watch and a daily planner they will write in.
8. <u>What will you do if a participant doesn't adhere to their treatment?</u> Good question. I don't know. What should we do?

### Comparison

Three treatment conditions, no control.  

9. <u>You didn't plan for a control group - why is that?</u> We only have the resources for about 60 participants and adding a control group would make us have about 80... right?
10. <u>You really should have a control group...?</u> Why? The goal is to get participants to reduce their stress levels, so it doesn't make sense to have a group that doesn't receive treatment. <font color = #ff8c00>*A control group would be necessary to ensure that any stress reduction effect was actually due to the treatment and not due to some outside force (e.g., USC implementing free meditation to all students).*</font>

### Outcome

GRDO levels and BMI Z-score.

5. <u>Why are BMI-Z scores used instead of BMI?</u> BMI Z-scores are used in children instead of absolute BMI because they are more meaningful. The BMI Z-score reflects the age- and sex-specific Z-score corresponding to the child's BMI. <font color = #ff8c00>*Knowing why the outcome is used can help with statistical modeling. You won’t necessarily need to adjust for age and sex if age- and sex-specific z-scores are used.*</font>
6. <u>Your hyothesis is that GRDO increases fat tissue - does BMI measure fat? Do you have a measure that does assess this?</u> BMI Z-scores reflect the child’s height and weight, but don’t actually measure how fat is distributed in children’s bodies. We would need a DXA scan to obtain that information.
7. <u>Does GRDO vary throughout the day?</u> Perhaps, but it was difficult to get children to participate in this study so we measured them whenever their parents could bring them in.
8. <u>Were the children fasting?</u> Not necessarily. Even though children may have eaten before the blood test, GRDO levels should not be affected by recently-eaten food.

### Time

NA

9. <u>Did each participant come in only once, and were BMI and GRDO assessed at the same time?</u> Each child had only one visit to the lab where hormone levels and BMI were assessed.

```
   child_id   bmi_z  grdo
      <int>   <dbl> <dbl>
 1        1  0.770   4.47
 2        2  0.308   3.54
 3        3  0.357   5.35
 4        4 -0.617   3.58
 5        5 -0.442   3.60
 6        6  0.679   5.09
 7        7 -0.528   2.93
 8        8  1.26    5.19
 9        9  0.907   6.18
10       10  0.266   4.53
11       11  0.667   4.78
12       12  0.0202  2.22
13       13 -0.189   3.45
```


### Thoughts

<font color = #ef0000>The study team wants to demonstrate that GRDO increases fat. 1) They did not measure fat; only BMI which is a measure of weight. 2) This study can suggest causation but since it is cross-sectional one should not conclude causality between the variables. There are some flaws in the study design (e.g., not standardizing the time of day that GRDO levels were taken). A significant correlation between GRDO and BMI-Z demonstrating that they are related is as much as one can conclude.</font>