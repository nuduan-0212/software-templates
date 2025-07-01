apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: create-confluence-space
  title: Create Confluence Space
  description: Tạo một Confluence Space từ Backstage
spec:
  owner: backstage-team
  type: service
  parameters:
    - title: Confluence Info
      required:
        - spaceKey
        - spaceName
      properties:
        spaceKey:
          type: string
          title: Space Key
        spaceName:
          type: string
          title: Space Name
        spaceDescription:
          type: string
          title: Space Description
          default: Created by Backstage
  steps:
    - id: createSpace
      name: Create Confluence Space
      action: custom:create-confluence-space
      input:
        baseUrl: https://confluence.jitsinnovationlabs.com
        username: anhdn@jitsinnovationlabs.com
        apiToken: ${{
          secrets.confluenceApiToken
        }}
        spaceKey: ${{ parameters.spaceKey }}
        spaceName: ${{ parameters.spaceName }}
        spaceDescription: ${{ parameters.spaceDescription }}
