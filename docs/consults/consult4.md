# Practice Consultation 4 <br />Hormones and Adiposity

## Opening Statement

I work for a research group that studies the determinants of adiposity (i.e., fat) in children. We’ve been studying several different hormone levels in children to see if they are related to abnormal weight gain in the first few years of life. We have generally hypothesized that certain hormones can increase fat tissue in the abdomen, leading to higher rates of overweight and obesity in these children.  
One of the hormones we are currently interested in is called “hangrie,” as our research assistant has analyzed some data and found some interesting results. The [attached graph](consult4_graph.png) shows that there is a relationship between hangrie levels and BMI Z-score. It is clear that children with higher hangrie levels end up having higher BMI values, and we think that it’s because hangrie may cause increased fat production.  
What is the best way to demonstrate in a paper that hangrie causes higher BMI levels?


## Debriefing

### Population

Intended: Children.  
Actual: Unknown.  

1. <u>What age were these children?</u> Participants were generally 3-6 years old but I don't have this data. <font color = #ff8c00>*If age is associated with both higher hangrie levels and higher BMI-Z scores, then age could be a confounder.*</font>

### Intervention

The listed metrics were collected for these children, but it was unclear how this was done.  

2. <u>How was BMI-Z assessed?</u> Height and weight were obtained by trained research staff.
3. <u>How was hangrie level assessed?</u> hangrie levels were measured through a blood test.

### Comparison

No comparison; just looking at correlation.  

4. <u>You want to show that hangrie *causes* higher BMI - how can you justify this?</u> We hypothesized that hangrie causes more fat tissue and therefore higher BMI and the graph supports this. <font color = #ff8c00>*We should know that this is incorrect reasoning. This cross-sectional study does not show that hangrie causes higher BMI – it is simply associated with it.*</font>

### Outcome

hangrie levels and BMI Z-score.

5. <u>Why are BMI-Z scores used instead of BMI?</u> BMI Z-scores are used in children instead of absolute BMI because they are more meaningful. The BMI Z-score reflects the age- and sex-specific Z-score corresponding to the child's BMI. <font color = #ff8c00>*Knowing why the outcome is used can help with statistical modeling. You won’t necessarily need to adjust for age and sex if age- and sex-specific z-scores are used.*</font>
6. <u>Your hyothesis is that hangrie increases fat tissue - does BMI measure fat? Do you have a measure that does assess this?</u> BMI Z-scores reflect the child’s height and weight, but don’t actually measure how fat is distributed in children’s bodies. We would need a DXA scan to obtain that information.
7. <u>Does hangrie vary throughout the day?</u> Perhaps, but it was difficult to get children to participate in this study so we measured them whenever their parents could bring them in.
8. <u>Were the children fasting?</u> Not necessarily. Even though children may have eaten before the blood test, hangrie levels should not be affected by recently-eaten food.

### Time

NA

9. <u>Did each participant come in only once, and were BMI and hangrie assessed at the same time?</u> Each child had only one visit to the lab where hormone levels and BMI were assessed.

```
   child_id   bmi_z  hangrie
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

<font color = #ef0000>The study team wants to demonstrate that hangrie increases fat. 1) They did not measure fat; only BMI which is a measure of weight. 2) This study can suggest causation but since it is cross-sectional one should not conclude causality between the variables. There are some flaws in the study design (e.g., not standardizing the time of day that hangrie levels were taken). A significant correlation between hangrie and BMI-Z demonstrating that they are related is as much as one can conclude.</font>