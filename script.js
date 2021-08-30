// edabit problems and the solutions provided below each problem

// Compare Strings by Count of Characters:
//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1, str2) {
    if(str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}

//Upvotes vs Downvotes
//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
//Notes: You can expect only positive integers for vote counts.

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

//Recursion: Length of a String
//Write a function that returns the length of a string. Make your function recursive.

function length(str) {
    return str.length;
}

//Evaluate an Equation
//Create a function that evaluates an equation.
//Notes: Don't print, return a value.
// Return the value, not the equation.
// The method used to solve this challenge should not be used in practice. However, it's important to be aware of how this functionality works and why it should not be used.

function eq(evaluate) {
    return eval(evaluate)
}

