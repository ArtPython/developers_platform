from rest_framework import serializers


class AbstractClass(serializers.ModelSerializer):
    class Meta:
        # model = DevToProject
        model = None
        fields = "__all__"

    some_model = None
    some_one = None

    def validate(self, attrs):
        """checks if dev works on the particular project"""
        all_pr = []
        for i in self.some_model.objects.get(id=attrs[self.some_one].id).projects.all():
            all_pr.append(i.id)
        if attrs['project'].id in all_pr:
            return attrs
        raise serializers.ValidationError('works on different projects')
