﻿using System.Text.RegularExpressions;

namespace WebAPI
{
    public class PasswordValidator : IValidator<string>
    {
        public bool IsValid(string value)
        {
            return GetPasswordStrength(value) >= 4 && value.Length >= 12;
        }

        private int GetPasswordStrength(string password)
        {
            int score = 0;

            if (password.Length < 1)
                return -1;
            if (password.Length < 4)
                return -1;

            if (password.Length >= 8)
                score++;
            if (password.Length >= 12)
                score++;
            if (Regex.Match(password, @"/\d+/", RegexOptions.ECMAScript).Success)
                score++;
            if (Regex.Match(password, @"/[a-z]/", RegexOptions.ECMAScript).Success &&
              Regex.Match(password, @"/[A-Z]/", RegexOptions.ECMAScript).Success)
                score++;
            if (Regex.Match(password, @"/.[!,@,#,$,%,^,&,*,?,_,~,-,£,(,)]/", RegexOptions.ECMAScript).Success)
                score++;

            return score;
        }
    }
}
