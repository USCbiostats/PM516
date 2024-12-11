# Week 3

## Exploratory Analysis

&#x27A4; This week we will review how to conduct exploratory analyses from a hypothetical study examining physical activity and diet.  
&#x27A4; The data dictionary is located [here](data_dictionary.xlsx).  
&#x27A4; The data file is located [here](adult_all.csv).  

### Before Class

#### Data Quality Control Exercise

*Before beginning data analysis, it is imperative to check the quality of the data you will be analyzing. Often study staff, like a data manager, will clean the data and check for any errors. However, depending on who you work with, this task can be neglected.  <br /><br />
The “adult_all.csv” file contains data from an intervention attempting to improve physical activity and eating habits for participants.* <br /><br />
*As a brief background, this study wanted to look at whether moving to an active community ("treatment") was associated with differences in calorie consumption, physical activity, and BMI among participants. There are several ways of measuring physical activity (PA). One way is through an accelerometer, or a wearable device that records a participant's physical activity throughout the day. This device can compute the minutes we spend doing activity that is moderate-to-vigorous in nature (MVPA).  <br /><br />
Another way to classify physical activity is through a survey ("Arizona") that asks participants about how much time they engage in different types of activities. Based on their responses, the number of hours per week in different MET categories can be computed. For example, if an individual had a value of 15 for met_hrs_mets1x, that would indicate that they spend 15 hours per week on average performing "light" activities (like walking or easy housework).  <br /><br />
The final way to classify physical activity is by directly asking participants how much time they spend per week doing activity in particular categories. These responses are given in the variables that start with "time_".*

1.	Examine the 3 measures of physical activity: accelerometer, ARIZONA survey, and participant survey. Check their distributions for any anomalies and investigate how strongly these measures correlate with each other.
2.	Examine the measure of food intake from the BLOCK survey. Check the distributions of daily calories consumed, as well as grams of each macronutrient, for any anomalies. Construct variables that indicate the percent of calories in a person’s diet from each macronutrient.
3.	Examine the distribution of BMI for any anomalies. Determine whether BMI is associated with any of the measures of physical activity or food intake.
4.	Determine whether the outcomes of food intake or physical activity vary across the study groups (treatment vs. control groups).
5.	Are there any other concerns you have about this data?


### Optional Readings

📖 [Ten Simple Rules for Initial Data Analysis](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009819) (20 minutes)