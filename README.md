# JobMatcher

Like Tinder for finding jobs. If seeker matches with employer, a connection is made and they can message one another.

Seekers and employers can spend credits to do a super app, which appears as though they had matched with only one party taking action

Job Seekers

- Start with 5 free apps (applications)
- Get plus 1 free app per day
- Max 10 free Apps stored
- After free apps are gone, spend 1 credit to app
- Spend 10 credits to super app
- Can purchase 100 credits for 10 dollars

Employers

- Start with one free posting
- Purchase additional for \$10 each
- Get 100 credits per job posted
- Get one free call per day (employer version of app/match)
- Once free calls are used, spend 1 credit to call
- Spend 10 credits to super call

Stretch Goals

- Implement in-app messaging
- Free but Premium Tier for all Lambda grads and hiring partners
- Lambda Badges on profile for grads, verified by Lambda Staff

## Local setup

1. Clone repo

1. Create `.env` file withe following content

   ```.env
   DEBUG=True
   SECRET_KEY=NOTSOSECRETANYMORE
   ALLOWED_HOSTS=localhost,127.0.0.1
   DATABASE_URL=sqlite:///db.sqlite3
   ```

1. Install virtual environment and packages using [Pipenv](https://pipenv.readthedocs.io/en/latest/)

   ```bash
   pipenv install
   ```

1. Activate virtual environment

   ```bash
   pipenv shell
   ```

1. Apply migrations

   ```bash
   pyton manage.py migrate
   ```

1. Start Django server

   ```bash
   pyton manage.py runserver
   ```
