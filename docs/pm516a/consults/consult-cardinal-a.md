# Practice Consultation (Cardinal) <br />Particulates in Surgery

## Opening Statement

I’m a doctor involved with dental surgery at USC. We are planning to examine how much particulate matter builds up in our operating room during oral surgery procedures.

Our main goal is to determine whether particulate matter increases in the operating room during these procedures. We plan to use an optical particle counter placed in the room to record particulate levels before and during surgery.

Because this is a busy clinical environment, we are hoping to keep data collection as simple as possible. We expect to collect a large number of particulate measurements during each surgery, and we think having lots of data points will give us strong statistical power.

We'd like your input on whether this design will let us answer our research question.

## Additional Information

### Population

Intended: All patients that undergo oral surgery.  
Actual: Patients that underwent oral surgery at USC.

1. <u>Are all patients undergoing the same procedure?</u> No. There are 4 different categories of procedures, but we don't plan on looking at procedure type. <font color = #ff8c00>*Particulate matter could vary based on procedure type.*</font>
2. <u>How many patients do you plan to examine?</u> We intend on collecting data from 100 total surgeries. <font color = #ff8c00>*This may be adequately powered but no formal analysis has been done. With a sample size of 100, it should be fine, especially if the investigators plan on seeing a drastic increase in particulate matter.*</font>

### Intervention

There is no formal intervention.

1. <u>How long were the surgeries?</u> These surgeries can last anywhere from a couple minutes to about an houres. <font color = #ff8c00>*Surgery length will likely be related to the amount of particulate matter buildup.*</font>
2. <u>What is the air filtration system like in these rooms?</u> The air filtration system we have fully cycles the air in the room every 3-4 minutes.
3. <u>Who performes the surgeries?</u> It could be any of our surgeons. <font color = #ff8c00>*Particulate matter may vary based on something the surgeon routinely does.*</font>
4. <u>What time of day are the surgeries performed?</u> Most of these surgeries are typically scheduled for the morning, but that's not a strict guideline. <font color = #ff8c00>*Particulate matter may be different at different times of the day.*</font>

### Comparison

Ambient particulate matter during surgery was compared to pre-surgery.

1. <u>What do you want to compare, exactly?</u> We want to see if, and to what extent, particulates of different sizes increase during these surgeries.

### Outcome

Amount of particulate matter.

1. <u>You said that you had many different particle types?</u> Yes, the sensors will look at 5 different types of particles depending on their size (&lt;1.0, 1.0-2.5, 2.5-5.0, 5.0-10.0, and 10.0-25.0 µm).

### Time

Measurements were taken multiple times during each surgery.

1. <u>How many times will you assess particulate counts during surgery?</u> We can take a baseline measurement and then the machine will give us particulate counts ascertained in 15-second sampling intervals.
2. <u>Do you want to analyze simply during vs. pre, or a specific effect of time?</u> I don't know. We just want to show how the particulate counts increase during surgeries so that we can better inform suitability of our surgeons' protective equipment and filtration systems.
3. <u>Is there any way you can ascertain time?</u> We will check to see if the sensor can record this information.


### Thoughts

<font color = #ef0000>Yikes. There should be a time series analysis of how particulate matter changes, but unfortunately the data is not there. At a minimum, they shouldn’t pool everyone’s readings together. I’d take every operation’s baseline value and compare it to the mean value during surgery using a paired t-test. Depending on the sample size, we could explore stratifying by procedure type. We would conduct a paired samples t-test comparing pre-surgery to during-surgery for each of the particulate sizes. The reviewer’s concern could be addressed by performing a false discovery rate correction of the p-values. </font>