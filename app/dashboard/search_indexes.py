from haystack import indexes

from .models import Bounty, HackathonProject, UserDirectory

class BountyIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True)
    title = indexes.CharField(model_attr='title')

    def get_model(self):
        return Bounty

    def index_queryset(self, using=None):
        """Used when the entire index for model is updated."""
        return self.get_model().objects.all()

class HackathonProjectIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True)
    name = indexes.CharField(model_attr='name')
    summary = indexes.CharField(model_attr='summary')

    def get_model(self):
        return HackathonProject

    def index_queryset(self, using=None):
        """Used when the entire index for model is updated."""
        return self.get_model().objects.all()

class UserDirectoryIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)
    profile_id = indexes.CharField(null=True,model_attr='profile_id')
    join_date = indexes.CharField(null=True,model_attr='join_date')
    github_created_at = indexes.CharField(null=True,model_attr='github_created_at')
    first_name = indexes.CharField(null=True,model_attr='first_name')
    last_name = indexes.CharField(null=True,model_attr='last_name')
    email = indexes.CharField(null=True,model_attr='email')
    handle = indexes.CharField(null=True,model_attr='handle')
    sms_verification = indexes.BooleanField(null=True,model_attr='sms_verification')
    persona = indexes.CharField(null=True,model_attr='persona')
    rank_coder = indexes.CharField(null=True,model_attr='rank_coder')
    num_hacks_joined = indexes.CharField(null=True,model_attr='num_hacks_joined')
    # which_hacks_joined = indexes.ArrayField(base_field=indexes.CharField())
    hack_work_starts = indexes.CharField(null=True,model_attr='hack_work_starts')
    hack_work_submits = indexes.CharField(null=True,model_attr='hack_work_submits')
    hack_work_start_orgs = indexes.CharField(null=True,model_attr='hack_work_start_orgs')
    hack_work_submit_orgs = indexes.CharField(null=True,model_attr='hack_work_submit_orgs')
    bounty_work_starts = indexes.CharField(null=True,model_attr='bounty_work_starts')
    bounty_work_submits = indexes.CharField(null=True,model_attr='bounty_work_submits')
    hack_started_feature = indexes.CharField(null=True,model_attr='hack_started_feature')
    hack_started_code_review = indexes.CharField(null=True,model_attr='hack_started_code_review')
    hack_started_security = indexes.CharField(null=True,model_attr='hack_started_security')
    hack_started_design = indexes.CharField(null=True,model_attr='hack_started_design')
    hack_started_documentation = indexes.CharField(null=True,model_attr='hack_started_documentation')
    hack_started_bug = indexes.CharField(null=True,model_attr='hack_started_bug')
    hack_started_other = indexes.CharField(null=True,model_attr='hack_started_other')
    hack_started_improvement = indexes.CharField(null=True,model_attr='hack_started_improvement')
    started_feature = indexes.CharField(null=True,model_attr='started_feature')
    started_code_review = indexes.CharField(null=True,model_attr='started_code_review')
    started_security = indexes.CharField(null=True,model_attr='started_security')
    started_design = indexes.CharField(null=True,model_attr='started_design')
    started_documentation = indexes.CharField(null=True,model_attr='started_documentation')
    started_bug = indexes.CharField(null=True,model_attr='started_bug')
    started_other = indexes.CharField(null=True,model_attr='started_other')
    started_improvement = indexes.CharField(null=True,model_attr='started_improvement')
    submitted_feature = indexes.CharField(null=True,model_attr='submitted_feature')
    submitted_code_review = indexes.CharField(null=True,model_attr='submitted_code_review')
    submitted_security = indexes.CharField(null=True,model_attr='submitted_security')
    submitted_design = indexes.CharField(null=True,model_attr='submitted_design')
    submitted_documentation = indexes.CharField(null=True,model_attr='submitted_documentation')
    submitted_bug = indexes.CharField(null=True,model_attr='submitted_bug')
    submitted_other = indexes.CharField(null=True,model_attr='submitted_other')
    submitted_improvement = indexes.CharField(null=True,model_attr='submitted_improvement')
    bounty_earnings = indexes.CharField(null=True,model_attr='bounty_earnings')
    bounty_work_start_orgs = indexes.CharField(null=True,model_attr='bounty_work_start_orgs')
    bounty_work_submit_orgs = indexes.CharField(null=True,model_attr='bounty_work_submit_orgs')
    kudos_sends = indexes.CharField(null=True,model_attr='kudos_sends')
    kudos_receives = indexes.CharField(null=True,model_attr='kudos_receives')
    hack_winner_kudos_received = indexes.CharField(null=True,model_attr='hack_winner_kudos_received')
    grants_opened = indexes.CharField(null=True,model_attr='grants_opened')
    grants_contributed = indexes.CharField(null=True,model_attr='grants_contributed')
    grant_contributions = indexes.CharField(null=True,model_attr='grant_contributions')
    grant_contribution_amount = indexes.CharField(null=True,model_attr='grant_contribution_amount')
    num_actions = indexes.CharField(null=True,model_attr='num_actions')
    action_points = indexes.FloatField(null=True,model_attr='action_points')
    avg_points_per_action = indexes.FloatField(null=True,model_attr='avg_points_per_action')
    last_action_on = indexes.CharField(null=True,model_attr='last_action_on')
    # keywords = indexes.ArrayField(base_field=indexes.CharField())
    activity_level = indexes.CharField(null=True,model_attr='activity_level')
    reliability = indexes.CharField(null=True,model_attr='reliability')
    average_rating = indexes.CharField(null=True,model_attr='average_rating')
    longest_streak = indexes.CharField(null=True,model_attr='longest_streak')
    earnings_count = indexes.CharField(null=True,model_attr='earnings_count')
    follower_count = indexes.CharField(null=True,model_attr='follower_count')
    following_count = indexes.CharField(null=True,model_attr='following_count')
    num_repeated_relationships = indexes.CharField(null=True,model_attr='num_repeated_relationships')
    verification_status = indexes.BooleanField(null=True,model_attr='verification_status')

    # We add this for autocomplete.
    handle_auto = indexes.EdgeNgramField(model_attr='handle')
    first_name_auto = indexes.EdgeNgramField(model_attr='first_name')
    last_name_auto = indexes.EdgeNgramField(model_attr='last_name')
    persona_auto = indexes.EdgeNgramField(model_attr='persona')


    # def prepare(self, obj):
    #     data = super(ProfileIndex, self).prepare(obj)
    #     merged = { **data, **obj.to_dict() }
    #     return merged

    def get_model(self):
        return UserDirectory

    def index_queryset(self, using=None):
        """Used when the entire index for model is updated."""
        return self.get_model().objects.all()
