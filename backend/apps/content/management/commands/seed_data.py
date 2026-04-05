from django.core.management.base import BaseCommand

from apps.challenges.models import Challenge
from apps.content.models import Exercise, Lesson
from apps.progress.models import Badge


class Command(BaseCommand):
    help = "Seed baseline content for Open Source Contribution Atelier"

    def handle(self, *args, **options):
        lesson, _ = Lesson.objects.get_or_create(
            slug="open-source-basics",
            defaults={
                "title": "Open Source Basics",
                "difficulty": "beginner",
                "summary": "Understand repositories, issues, pull requests, and contribution etiquette.",
                "content": "Start with reading project docs, finding good first issues, and understanding maintainers' expectations.",
                "estimated_minutes": 20,
                "order": 1,
            },
        )
        Exercise.objects.get_or_create(
            lesson=lesson,
            title="Check Repository Status",
            defaults={
                "prompt": "Inspect the current working tree before making changes.",
                "expected_command": "git status",
                "explanation": "Checking status before and after changes builds healthy contribution habits.",
                "points": 10,
            },
        )
        Challenge.objects.get_or_create(
            slug="first-pr-prep",
            defaults={
                "title": "Prepare Your First PR",
                "summary": "Practice the branching and commit flow for a first contribution.",
                "difficulty": "beginner",
                "points": 50,
                "is_featured": True,
            },
        )
        Badge.objects.get_or_create(
            slug="first-steps",
            defaults={
                "name": "First Steps",
                "description": "Completed your first lesson milestone.",
            },
        )
        self.stdout.write(self.style.SUCCESS("Seed data ensured."))
