# Explaining Statistical Concepts: Breakout Scenarios

These scenarios are designed for practicing the ADEPT method of explaining statistical concepts:
**Analogy, Diagram, Example, Plain Language, Technical Detail.**
Each reflects a realistic confusion that collaborators or clients may have, without implying a lack of sophistication.


## 1. Scenario 1

**Context:**  
Your client is looking at the effect of a new GLP-1 drug on weight loss. You ran a regression of percent weight loss as a function of the square root of time and found:  
Y = –1.94 × √(time in months).  
You explained:  
> “For each unit increase in the square unit of time (month) since the start of medication, there was an average 1.94 unit decrease in percent weight change.”

The client responds:  
> “So participants lost 1.94% of their weight each month? That seems too steep — it would mean about 24% after a year.”

**Challenge:**  
Clarify that the coefficient applies per **square root month**, meaning weight loss slows over time rather than accumulating linearly.


## 2. Scenario 2

**Context:**  
Your client is looking at the relationship between the levels of 16 different hormones and participant BMI. Four of these hormones were significant at p < 0.05.  
The collaborator asks:  
> “If those results are significant, why should we adjust for multiple comparisons? Won’t that just make it harder to find real effects?”

**Challenge:**  
Explain how running many tests increases the chance of false positives and why adjustments like Bonferroni or FDR protect against overinterpretation.


## 3. Scenario 3

**Context:**  
Your client is plannign a pilot study on the effect of a new training program on adherence to best practices in the hospital. They say:  
> “Let’s just collect what we can and see what happens. Why bother with a power analysis?”

**Challenge:**  
Explain that power analysis isn’t about “getting a big sample,” but about ensuring the study can produce interpretable results.


## 4. Scenario 4

**Context:**  
A multi-site study examines behavioral therapy outcomes in children with a neurological disorder.  
The Los Angeles site tends to enroll **older children** (average age 11), while the Minnesota site enrolls **younger children** (average age 7).  
Researchers observe that **average outcomes differ by site**, but **within each site**, outcomes do **not** vary meaningfully by age.  

A collaborator concludes:  
> “So older children seem to have worse outcomes — that must be an age effect, right?”

**Challenge:**  
Explain that age appears related to outcomes only because age differs by site, and the outcome differs by site.  
The apparent age–outcome association is actually driven by **site-level confounding**, not by a true causal link between age and outcome.


## 5. Scenario 5

**Context:**  
A client is reviewing regression results and says:  
> “The treatment × sex interaction isn’t significant (p = 0.12), so the treatment works the same for males and females, right?”

**Challenge:**  
Explain that a non-significant interaction does **not** prove equality of effects — it simply means the data don’t provide enough evidence to confirm a difference.


## 6. Scenario 6

**Context:**  
Two candidate models show different fit statistics:  
Model A has AIC = 420, BIC = 450; Model B has AIC = 425, BIC = 430.  
A collaborator asks:  
> “Which model is better? AIC says A is better, but BIC says B is better — that seems contradictory.”

**Challenge:**  
Explain the different goals of AIC and BIC and how to interpret conflicting recommendations based on study purpose.


## 7. Scenario 7

**Context:**  
A collaborator runs a multiple regression predicting recovery time from patient characteristics.  
Individually, both **BMI** and **waist circumference** are significant predictors.  
However, when included together, **neither remains significant**.  
The collaborator says:  
> “That doesn’t make sense — if both were significant on their own, shouldn’t combining them make the model even stronger?”

**Challenge:**  
Explain that these two variables contain overlapping information, so their shared variance cancels out in the combined model.  
The model can’t separate which one is responsible once both are included.


## 8. Scenario 8

**Context:**  
After exploring a dataset with many potential predictors, a collaborator says:  
> “We tested about 15 variables and found three that were significant.  
> Let’s just focus on those in the paper and maybe run subgroup analyses for them.”

**Challenge:**  
Explain that selecting and reporting only significant results after looking at the data inflates the chance of false positives and produces biased estimates.  
Even well-intentioned exploratory filtering can make effects appear more certain than they are.
