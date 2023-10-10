resource "aws_s3_bucket" "terrform_state" {
  bucket = "cloudfoundation-org-tf-state"
  // buckets are private by default https://aws.amazon.com/about-aws/whats-new/2022/12/amazon-s3-automatically-enable-block-public-access-disable-access-control-lists-buckets-april-2023/
  // buckets also encrypt by default https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html
}

resource "aws_s3_bucket_versioning" "terrform_state" {
  bucket = aws_s3_bucket.terrform_state.id
  versioning_configuration {
    status = "Enabled"
  }
}