# Week 2 - Monday, May 29

## PM516A - Exploratory Analysis

&#x27A4; We will not meet live due to **Memorial Day**.  
&#x27A4; This week we will review how to conduct exploratory analyses from a hypothetical study examining physical activity and diet.  
&#x27A4; The data dictionary is located [here](data_dictionary.xlsx).  
&#x27A4; The data file is located [here](adult_all.csv).  

### Complete Outside of Class

#### Data Quality Control Exercise

*Before beginning data analysis, it is imperative to check the quality of the data you will be analyzing. Often study staff, like a data manager, will clean the data and check for any errors. However, depending on who you work with, this task can be neglected.  
The “adult_all.csv” file contains data from an intervention attempting to improve physical activity and eating habits for participants.* <br />
*As a brief background, this study wanted to look at whether moving to an active community ("treatment") was associated with differences in calorie consumption, physical activity, and BMI among participants. There are several ways of measuring physical activity (PA). One way is through an accelerometer, or a wearable device that records a participant's physical activity throughout the day. This device can compute the minutes we spend doing activity that is moderate-to-vigorous in nature (MVPA).  
Another way to classify physical activity is through a survey ("Arizona") that asks participants about how much time they engage in different types of activities. Based on their responses, the number of hours per week in different MET categories can be computed. For example, if an individual had a value of 15 for met_hrs_mets1x, that would indicate that they spend 15 hours per week on average performing "light" activities (like walking or easy housework).  
The final way to classify physical activity is by directly asking participants how much time they spend per week doing activity in particular categories. These responses are given in the variables that start with "time_".*

1.	Examine the 3 measures of physical activity: accelerometer, ARIZONA survey, and participant survey. Check their distributions for any anomalies and investigate how strongly these measures correlate with each other.
2.	Examine the measure of food intake from the BLOCK survey. Check the distributions of daily calories consumed, as well as grams of each macronutrient, for any anomalies. Construct variables that indicate the percent of calories in a person’s diet from each macronutrient.
3.	Examine the distribution of BMI for any anomalies. Determine whether BMI is associated with any of the measures of physical activity or food intake.
4.	Determine whether the outcomes of food intake or physical activity vary across the study groups (treatment vs. control groups).
5.	Are there any other concerns you have about this data?

#### Group Debriefing of Quality Control Exercise

*Meet with your groups on your own time. Within your group, discuss what you found with regard to this week’s data quality exercise.*

6. Which techniques did you use to examine the data? 
7. Did your group members find anything unusual about the data that you didn’t find?
8. Which statistical software did your group members use? Why did they use that software? Ask them to explain why they use the program they do.
9. Compare your descriptive statistics to your group members’. Were there any discrepancies? If so, why do you think this happened? Did they treat the data differently than you did?

### Optional Readings

📖 [Ten Simple Rules for Initial Data Analysis](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009819)


## PM516B - Reproducibility

&#x27A4; This week we will explore what it means to be replicable and reproducible.

### Complete Outside of Class

#### Reproducibility and Replicability

📖 [Data Science's Reproducibility Crisis](https://towardsdatascience.com/data-sciences-reproducibility-crisis-b87792d88513)

1. Consider an analysis you performed in the past (e.g., for a class project). Examine the code you wrote for that project. Looking back, can you understand what your code does?
2. If you provided this code to another student in your group, would they be able to replicate the analysis you performed?
3. What can you do to help others reproduce, and replicate, your analysis?
4. In your own words, what is the difference between replication and reproduction?

### Optional Readings
📖 [Keeping A Paper Trail: Data Management Skills for Reproducible Science](https://laskowskilab.faculty.ucdavis.edu/2020/08/03/keeping-a-paper-trail-data-management-skills-for-reproducible-science/)  

📖 [Advanced R Style Guide](http://adv-r.had.co.nz/Style.html)

📖 [Google's R Style Guide](https://google.github.io/styleguide/Rguide.html)

📖 [80 Characters Per Line is A Standard Worth Sticking To Even Today](https://nickjanetakis.com/blog/80-characters-per-line-is-a-standard-worth-sticking-to-even-today)