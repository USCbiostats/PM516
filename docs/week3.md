# Week 3

## Initial Data Analysis

Before conducting formal statistical analyses, a consultant must understand the structure and quality of the data. This week focuses on initial data analysis, including identifying missingness, outliers, implausible values, and inconsistencies across measures. Careful early exploration prevents downstream errors and strengthens the consulting process.

By the end of this week you will be able to:
1. Identify common data quality issues that arise in real studies.
2. Articulate how initial data exploration informs a consulting analysis plan.

### Links to Resources
[Data Dictionary](data_dictionary.xlsx).  
[Data File](adult_all.csv).  

### Before Class

#### Data Quality Control Exercise

Before beginning formal analysis, it is essential to check the quality and structure of your data. While study stuff may perform data cleaning, this responsibility can vary across collaborations. As consultants, we must be prepared to evaluate data critically before proceeding.

This week's dataset comes from an intervention examining whether moving to an "active" community (treatment) is associated with differences in calorie consumption, physical activity, and BMI.

Physical activity is measured in three ways:
* <b>Accelerometer data</b>, which records minutes of moderate-to-vigorous physical activity (MVPA) using a wearable device.
* <b>The ARIZONA survey</b>, which estimates hours spent in activity categories based on MET classifications.
* <b>Self-reported activity variables</b> (beginning with "time_"), which capture reported time spent in specific activity types.

You will explore these measures, along with dietery intake and BMI, to evaluate data quality and identify potential concerns before modeling.



💻 You will be assigned to one of the following IDA steps. Be prepared to share your findings with the class during our next session.

<b>Task 1</b>. Understand Data Structure

Look at:

* Number of rows/columns
* Variable types (numeric, categorical)
* Range of each varaible
* Variable units

Produce a summary table of variable types and ranges.

<b>Task 2</b>. Quantify Missingness

Look at:

* Percent missing for key variables
* Patterns of missingness (by treatment group)

Produce a table of missingness for each variable, and by treatment group.

<b>Task 3</b>. Identify Outliers

Produce boxplots for BMI, calories, and one PA measure. Look at:

* Extreme values
* Impossible values
* Implausible values

Explain how you identified outliers and whether you think these are real values or data entry errors.

<b>Task 4</b>. Explore Distributions

Produce histograms for BMI, calories, and one PA measure. Look at:

* Shape
* Skewness

For each of these variables, explain whether you think the variable follows a common distribution, and which.

<b>Task 5</b>. Evaluate Internal Consistency

Select two PA measures and look at:

* A scatter plot for the relationship between the two variables
* The value of the correlation betwen the two variables

State how strongly these variables, which measure the same concept, are related.

<b>Task 6</b>. Explore Basic Relationships

Examine the relationship between treatment group and one outcome, producing:

* A graphic of the relationship
* Means/medians of the outcome by the levels of treatment group

State whether this relationship was expected, and which statistical test you could perform to evaluate it further.

<b>Task 7</b>. Calculated Variable Checks

Compute the percentage of calories from each macronutrient (carbs, protein, fat). As a note, each gram of carbs or protein contributes 4 calories, and each gram of fat contributes 9 calories. 

* Check whether the sum of the calories from each macronutrient equals the total calories

<b>Task 8</b>. Implausible Non-Outliers

Identify individauls with calorie intake <500 kcal/day, or other unusual values, providing:

* The number of individuals that fall into this category
* A relationship between calorie intake and another related variable, such as BMI or PA

Comment on the plausibility of these values in light of real-world context.

### In Class

In this week's class, we will review the analyses you and your group performed.

### Reflection

*There can be a lot to consider when it comes to initial data analysis. What are some strategies you can employ to not become overwhelmed with the process?* 

*If you could ask the investigator one question based on your findings, what would it be?*

### Supplemental Readings

📖 [Ten Simple Rules for Initial Data Analysis](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009819) (20 minutes)

📖 [Exploratory Data Analysis](https://r4ds.had.co.nz/exploratory-data-analysis.html) (30 minutes)